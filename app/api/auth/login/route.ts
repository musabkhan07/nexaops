import { NextResponse } from 'next/server';
import { createAdminToken } from '@/lib/auth';
export async function POST(req:Request){
 const body=await req.json().catch(()=>({}));
 if(body.email!==process.env.ADMIN_EMAIL || body.password!==process.env.ADMIN_PASSWORD) return NextResponse.json({error:'Invalid credentials'},{status:401});
 const token=await createAdminToken(); const res=NextResponse.json({ok:true});
 res.cookies.set('nexaops_admin',token,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',path:'/',maxAge:60*60*8}); return res;
}
