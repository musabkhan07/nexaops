import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminToken } from './lib/auth';
export async function middleware(req:NextRequest){
  if(req.nextUrl.pathname.startsWith('/admin') && req.nextUrl.pathname!=='/admin/login'){
    const token=req.cookies.get('nexaops_admin')?.value;
    if(!token || !(await verifyAdminToken(token))) return NextResponse.redirect(new URL('/admin/login',req.url));
  }
  return NextResponse.next();
}
export const config={matcher:['/admin/:path*']};
