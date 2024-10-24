import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/fourm(.*)']); //dashboard페이지는 보호해야할 루트다.
const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)']); //로그인 안해도 보여져야하는 페이지
export default clerkMiddleware((auth, req) => {
   if (isProtectedRoute(req)) auth().protect()
   if (!isPublicRoute(req)) auth().protect()
});

export const config = {
   matcher: [
      // Skip Next.js internals and all static files, unless found in search params
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      // Always run for API routes
      '/(api|trpc)(.*)',
   ],
};