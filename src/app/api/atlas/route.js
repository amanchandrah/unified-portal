// src/app/api/atlas/route.js
import { NextResponse } from 'next/server';
import admin from 'firebase-admin';
import serviceAccount from '../../../../serviceAccountKey.json';

/* initialise once */
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();
const ADMIN_PASSWORD = process.env.ATLAS_PASSWORD;

export async function POST(req) {
  try {
    const { password, email, name, position, department } = await req.json();

    if (password !== ADMIN_PASSWORD)
      return NextResponse.json({ error: 'Wrong password' }, { status: 401 });

    if (!email || !name || !position || !department)
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

      await db.collection('organisers').doc(email).set({
        Name: name,
        Department: department,
        Position: position
      });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}