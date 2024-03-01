import { NextRequest as n_req, NextResponse as n_res } from "next/server";
import schema from './schema'

const STATUS_ERROR = { status: 400 }
const STATUS_CREATED = { status: 201 }
// const STATUS_OK = { status: 200 }

export function GET(request: n_req) { // adding request object prevents caching of data
    return n_res.json([
        { 
            id: 'hi',
            name: 'hello'
        }
    ])
}

export async function POST(request: n_req) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) return n_res.json(validation.error.errors, STATUS_ERROR);

    return n_res.json({ id:1, name: body.name}, STATUS_CREATED);
}