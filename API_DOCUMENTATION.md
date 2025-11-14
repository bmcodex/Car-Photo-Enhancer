# API Documentation

## tRPC Endpoints

### Photos Router

#### `photos.list`
Get all photos for the current user.

**Type**: Query  
**Authentication**: Required

**Response**:
```typescript
Photo[]
```

#### `photos.upload`
Upload a new photo.

**Type**: Mutation  
**Authentication**: Required

**Input**:
```typescript
{
  originalImageUrl: string;
  title?: string;
}
```

**Response**:
```typescript
{
  id: number;
  userId: number;
  originalImageUrl: string;
  createdAt: Date;
}
```

#### `photos.getById`
Get a specific photo by ID.

**Type**: Query  
**Authentication**: Public

**Input**:
```typescript
number // photoId
```

**Response**:
```typescript
Photo | null
```

#### `photos.update`
Update photo metadata and edited image.

**Type**: Mutation  
**Authentication**: Required

**Input**:
```typescript
{
  id: number;
  editedImageUrl?: string;
  presetName?: string;
}
```

**Response**:
```typescript
{
  success: boolean;
}
```

### Auth Router

#### `auth.me`
Get current authenticated user.

**Type**: Query  
**Authentication**: Public (returns null if not authenticated)

**Response**:
```typescript
{
  id: number;
  openId: string;
  name?: string;
  email?: string;
  role: 'user' | 'admin';
} | null
```

#### `auth.logout`
Logout the current user.

**Type**: Mutation  
**Authentication**: Required

**Response**:
```typescript
{
  success: boolean;
}
```

## Error Handling

All API calls return typed errors:

```typescript
{
  code: 'UNAUTHORIZED' | 'NOT_FOUND' | 'BAD_REQUEST' | 'INTERNAL_SERVER_ERROR';
  message: string;
}
```

## Usage Examples

### React Component Example

```typescript
import { trpc } from '@/lib/trpc';

export function PhotoList() {
  const { data: photos, isLoading } = trpc.photos.list.useQuery();
  
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      {photos?.map(photo => (
        <img key={photo.id} src={photo.originalImageUrl} />
      ))}
    </div>
  );
}
```

### Upload Example

```typescript
const uploadMutation = trpc.photos.upload.useMutation();

const handleUpload = async (imageUrl: string) => {
  await uploadMutation.mutateAsync({
    originalImageUrl: imageUrl,
    title: 'My Car Photo'
  });
};
```

## Rate Limiting

- 100 requests per minute per user
- 1000 requests per hour per user

## Data Types

### Photo
```typescript
interface Photo {
  id: number;
  userId: number;
  originalImageUrl: string;
  editedImageUrl?: string;
  presetName?: string;
  title?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### User
```typescript
interface User {
  id: number;
  openId: string;
  name?: string;
  email?: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
  lastSignedIn: Date;
}
```

