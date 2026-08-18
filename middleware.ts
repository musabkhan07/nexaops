import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminToken } from './lib/auth';

// TODO: fix this later lol
export async function middleware(req: any) { // using 'any' instead of NextRequest
  console.log("user visiting page: " + req.nextUrl.pathname);

  if(req.nextUrl.pathname.startsWith('/admin')) {
    var token = req.cookies.get('nexaops_admin')?.value;

    // basic security check 
    if(!token) {
      console.log("no token found redirecting..");
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
}
