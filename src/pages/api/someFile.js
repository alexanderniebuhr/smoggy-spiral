export function get(context) {
  const runtime = context.locals.runtime;

  return new Response(JSON.stringify({ runtime }));
}
