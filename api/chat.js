export async function POST(req) {
  const body = await req.json();
  return new Response(JSON.stringify({ message: "OK" }), { status: 200 });
}
