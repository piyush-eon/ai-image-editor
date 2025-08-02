# To start frentend server
   npm run dev

# To see data storage 
   npx convex dev

# what and all i have used , and how it work.
 1. API Routes (Next.js)
You have custom API endpoints (like /api/imagekit/upload) that handle requests from your frontend. 
# example:
  When we upload an image, the frontend sends a POST request to your API route, which processes the image and interacts with ImageKit.

 2. ImageKit Integration
In the backend  it will use the ImageKit SDK(softwarebdevelopment kit) to upload images, generate URLs, and perform transformations (like background removal).

 3. Authentication
 Clerk is used for user authentication. The backend checks if a user is logged in before allowing actions like uploading images ot editing.

 4. Convex Database
 Convex is used for real-time data storage and retrieval. Your backend interacts with Convex for storing project data, user info,projects info etc.

 5. Third-party APIs(Unsplash)
 For features like Unsplash image search, your backend uses API keys and fetches data from Unsplash.
# Unsplash Example

When you search for a background image in the editor, the frontend sends your search query to an API route. The backend uses the Unsplash API to fetch relevant images and returns them to the frontend, allowing you to select and apply them as backgrounds in your project or in ur image.

# fabric.js (it is a open-source javascript library)
fabric.js is a powerful JavaScript library for working with HTML5 canvas. In my  project, it’s been used for image editing features such as adding, removing, and transforming images and other objects on the canvas.
# the promat.txt is in public folder.

--------------------------------- end ---------------------------------------