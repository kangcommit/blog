# Blog Application

A modern blog platform built with [TanStack Start](https://tanstack.com/start), React, TypeScript, and Tailwind CSS.

## Features

- Create, read, update, and delete blog posts
- Auto-generated URL slugs from post titles
- Modal-based inline editing (edit without leaving the post list)
- Responsive design with Tailwind CSS
- Server-side rendering with TanStack Start
- Type-safe development with TypeScript
- Fast, optimized build with Vite
- Router invalidation pattern for real-time data synchronization

## Getting Started

To run this application:

```bash
pnpm install
pnpm dev
```

The application will be available at `http://localhost:3000`.

## Building For Production

To build this application for production:

```bash
pnpm build
```



## Routing

This project uses [TanStack Router](https://tanstack.com/router) with file-based routing. Routes are managed as files in `src/routes`. The main blog interface is rendered at the root route (`/`), with the post module providing the core functionality.

To navigate between routes, import the `Link` component from `@tanstack/react-router`:

```tsx
import { Link } from "@tanstack/react-router";

export function Navigation() {
  return <Link to="/">Home</Link>
}
```

## API Integration

This application connects to an external backend API running on `http://localhost:8000`. Post operations (create, update, delete, fetch) are implemented as API client functions in `src/modules/post/lib/`. These functions handle HTTP requests to the backend and manage error responses.

**Backend Requirements**: You'll need to have a separate backend API running on port 8000 that provides POST, GET, PATCH, and DELETE endpoints at `/posts` and `/posts/{id}`.

## API Routes

The blog uses API routes for server-side operations. Routes can be defined in `src/routes` with server handlers for GET, POST, PUT, and DELETE operations.

For more information, see the [TanStack Router API documentation](https://tanstack.com/router/latest/docs/framework/react/api).

## Data Fetching & State Management

The blog uses a router invalidation pattern for state management:

1. **Initial Load**: Posts are fetched via `getPosts()` when the home route renders
2. **Mutations**: After creating, updating, or deleting a post, the router is invalidated via `router.invalidate()` to refetch the post list
3. **API Functions**: All API calls are defined in `src/modules/post/lib/` and handle JSON request/response formatting

This pattern keeps the UI in sync with the backend without needing local state mutation.

# Project Structure

```
src/
├── modules/
│   └── post/              # Post management module
│       ├── components/    # React components (forms, modals, lists)
│       ├── hooks/         # Custom hooks for post operations
│       ├── lib/           # Post API functions
│       ├── form/          # Form utilities and field hooks
│       └── types.ts       # TypeScript types
├── routes/                # TanStack Router file-based routes
└── styles.css            # Global styles (Tailwind CSS)
```

## Post Module

The blog's core functionality is managed in the `src/modules/post/` directory:

- **Components**: Reusable UI components for displaying, editing, and managing posts
  - `post-list.tsx` - Displays all posts with edit/delete actions
  - `post-card.tsx` - Individual post card with navigation links
  - `post-detail.tsx` - Full post view with formatted date
  - `post-form.tsx` - Create post form with slug auto-generation
  - `edit-post-form.tsx` - Modal-based post editor
  - `modal.tsx` - Reusable modal component
- **Hooks**: Custom React hooks for state management
  - `use-post-create` - Handle post creation with validation
  - `use-post-update` - Handle post editing
  - `use-post-delete` - Handle post deletion
  - `use-post-editor-modal` - Manage edit modal state
- **API**: Client functions for CRUD operations on posts (`get-posts`, `get-post`, `create-post`, `update-post`, `delete-post`)
- **Forms**: Form handling, validation, and slug generation utilities
- **Utils**: Date formatting utility

## Deploy with Nitro

This project uses Nitro as a generic server adapter, so it can run on any Node-compatible host.

```bash
npm run build
node dist/server/index.mjs
```

The build output is a self-contained Node server. To deploy, push the `dist/` directory to your host (Render, Fly.io, your own VPS, etc.) and run the server command above.

For host-specific presets (Vercel, Netlify, Cloudflare, AWS Lambda, etc.) and tuning, see https://v3.nitro.build/deploy.

## Learn More

- [TanStack Start](https://tanstack.com/start) - Full-stack React framework
- [TanStack Router](https://tanstack.com/router) - File-based routing
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
