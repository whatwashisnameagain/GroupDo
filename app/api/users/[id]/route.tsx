import { NextRequest as REQ, NextResponse as RES} from "next/server";
import schema from '../schema'

interface Props {
    params: {
        id: number
    }
}

export function GET(request :REQ, { params } :Props ) {
    if (params.id > 10) return RES.json({ error: "User not found"}, { status: 404 });
    return RES.json({ id: 1, name: "BamBam"});
}

export async function PUT(req :REQ, { params } :Props ){
    const body = await req.json();
    const validation = schema.safeParse(body); // instead of body.name 
    if (!validation.success) return RES.json(validation.error.errors, { status: 400 });
    if (params.id > 10) return RES.json({ error: "User not found."}, { status: 404 });
    return RES.json({ id: 1, name: body.name });
}

export async function DELETE(req :REQ, { params } :Props ){
    const body = await req.json();
    if (!body.name) return RES.json({ error: "Name is required."}, { status: 400 });
    if (params.id > 10) return RES.json({ error: "User not found."}, { status: 404 });
    return RES.json({});
}
