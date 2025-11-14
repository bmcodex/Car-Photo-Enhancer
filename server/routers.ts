import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { getUserPhotos, createPhoto, getPhotoById, updatePhoto } from "./db";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  photos: router({
    list: publicProcedure.query(async ({ ctx }) => {
      if (!ctx.user) return [];
      return getUserPhotos(ctx.user.id);
    }),
    upload: publicProcedure
      .input((val: any) => ({
        originalImageUrl: val.originalImageUrl as string,
        title: val.title as string | undefined,
      }))
      .mutation(async ({ ctx, input }) => {
        if (!ctx.user) throw new Error("Not authenticated");
        return createPhoto({
          userId: ctx.user.id,
          originalImageUrl: input.originalImageUrl,
          title: input.title,
        });
      }),
    getById: publicProcedure
      .input((val: any) => val.id as number)
      .query(async ({ input }) => {
        return getPhotoById(input);
      }),
    update: publicProcedure
      .input((val: any) => ({
        id: val.id as number,
        editedImageUrl: val.editedImageUrl as string | undefined,
        presetName: val.presetName as string | undefined,
      }))
      .mutation(async ({ input }) => {
        return updatePhoto(input.id, {
          editedImageUrl: input.editedImageUrl,
          presetName: input.presetName,
        });
      }),
  })
});

export type AppRouter = typeof appRouter;
