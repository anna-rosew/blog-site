# Blog Page Debugging Repository

This repository contains the code for our Next.js application with specific focus on the blog functionality that's currently experiencing errors.

## Context

Our main production site is deployed on Vercel, but we've removed the blog pages from that deployment to prevent errors from affecting the client-facing site. This repository contains the complete codebase including the problematic blog pages for debugging purposes.

### Issue Description

The blog pages (app/blog/page.tsx and app/blog/[slug]/page.tsx) are currently throwing errors when deployed. This is obviosuly an issue to do with the search params used in the slug page. Specifically:

20:35:22.943
20:35:22.943
app/blog/[slug]/page.tsx
20:35:22.943
Type error: Type 'BlogParams' does not satisfy the constraint 'PageProps'.
20:35:22.943
Types of property 'params' are incompatible.
20:35:22.943
Type '{ slug: string; }' is missing the following properties from type 'Promise<any>': then, catch, finally, [Symbol.toStringTag]
20:35:22.943
20:35:23.054
error Command failed with exit code 1.
20:35:23.055
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
20:35:23.076
Error: Command "yarn run build" exited with 1
20:35:23.389

## Setup Instructions

Clone this repository:
bashCopygit clone https://github.com/anna-rosew/blog-site.git
cd blog-site

### Install dependencies:
bashCopynpm install
# or
yarn install

### Create a .env.local file with the following variables:
Copy# Add any environment variables needed, like API keys, database connections, etc.

### Run the development server:
bashCopynpm run dev
# or
yarn dev

Navigate to http://localhost:3000/blog to see the issue in action

## Deployment for Testing

If you need to deploy this to test in a production-like environment:

Create a new project on Vercel
Connect it to your fork of this repository
Configure the same environment variables
Deploy

## Technical Stack

Next.js 14
TypeScript
Tailwind CSS


## How to Submit Fixes

Create a new branch:
bashCopygit checkout -b fix-blog-issue

Make your changes
Commit and push:
bashCopygit add .
git commit -m "Fixed blog page issues"
git push origin fix-blog-issue

Create a pull request against the main branch

## Contact
If you have any questions or need additional information, please contact me at annarosewain9@gmail.com.
Thank you for your help with debugging this issue!