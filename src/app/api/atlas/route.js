// src/app/api/atlas/route.js
import { NextResponse } from 'next/server';
import admin from 'firebase-admin';
import { cert } from 'firebase-admin/app';

// 1) read the service account safely
let serviceAccount;
try {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT ?? '{}');
} catch {
  serviceAccount = null;
}

// 2) initialise Firebase once
if (serviceAccount && !admin.apps.length) {
  admin.initializeApp({ credential: cert(serviceAccount) });
}

const db = admin.apps.length ? admin.firestore() : null;
const ADMIN_PASSWORD = process.env.ATLAS_PASSWORD;

// 3) POST handler
export async function POST(req) {
  if (!db) {
    return NextResponse.json({ error: 'Server setup error' }, { status: 500 });
  }

  try {
    const { password, email, name, position, department } = await req.json();

    if (password !== ADMIN_PASSWORD)
      return NextResponse.json({ error: 'Wrong password' }, { status: 401 });

    if (!email || !name || !position || !department)
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

    await db.collection('organisers').doc(email).set({ Name: name, Department: department, Position: position });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}