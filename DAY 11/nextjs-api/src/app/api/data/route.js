import { NextResponse } from "next/server";


let userData = {
  id: "1",
  name: "Dharanish",
  email: "dharanish@gmail.com",
  age: 20,
  country: "India",
  updatedAt: new Date().toISOString(),
};


export async function GET() {
  return NextResponse.json({
    method: "GET",
    user: userData,
  });
}


export async function POST(req) {
  const body = await req.json();

  if (!body.id) {
    return NextResponse.json(
      { error: "Missing 'id' in request body." },
      { status: 400 }
    );
  }

  userData = {
    ...body,
    updatedAt: new Date().toISOString(),
  };

  return NextResponse.json({
    method: "POST",
    message: "User data replaced.",
    user: userData,
  });
}


export async function PUT(req) {
  const body = await req.json();

  if (!body.id) {
    return NextResponse.json(
      { error: "Missing 'id' in request body." },
      { status: 400 }
    );
  }

  userData = {
    ...userData,
    ...body,
    updatedAt: new Date().toISOString(),
  };

  return NextResponse.json({
    method: "PUT",
    message: "User data updated (full).",
    user: userData,
  });
}


export async function PATCH(req) {
  const body = await req.json();

  if (!body.id) {
    return NextResponse.json(
      { error: "Missing 'id' in request body." },
      { status: 400 }
    );
  }

  userData = {
    ...userData,
    ...body,
    updatedAt: new Date().toISOString(),
  };

  return NextResponse.json({
    method: "PATCH",
    message: "User data patched (partial).",
    user: userData,
  });
}


export async function DELETE(req) {
  const body = await req.json();

  if (!body.id) {
    return NextResponse.json(
      { error: "Missing 'id' in request body." },
      { status: 400 }
    );
  }

  const deletedUser = { ...userData };

  userData = {
    id: body.id,
    name: null,
    email: null,
    age: null,
    country: null,
    updatedAt: new Date().toISOString(),
  };

  return NextResponse.json({
    method: "DELETE",
    message: "User data deleted (nullified).",
    oldUser: deletedUser,
    newUser: userData,
  });
}
