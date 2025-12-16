import { NextResponse } from 'next/server';
import { sql, createTable } from '../../../lib/db';

export async function POST(request: Request) {
  try {
    await createTable();
    const { name, email, message } = await request.json();

    await sql`
      INSERT INTO contacts (name, email, message)
      VALUES (${name}, ${email}, ${message})
    `;

    console.log('New contact saved:', { name, email, message });

    return NextResponse.json({ success: true, message: 'Message saved successfully' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to save message' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { rows } = await sql`SELECT * FROM contacts ORDER BY created_at DESC`;
    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch contacts' }, { status: 500 });
  }
}
