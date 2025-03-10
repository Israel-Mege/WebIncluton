export default {
  async fetch(request, env, ctx) {
    // Esta es una configuración básica para un worker de Cloudflare
    // La bandera nodejs_compat se configura en wrangler.toml
    return new Response("Hello from Worker!", {
      headers: { "content-type": "text/plain" },
    });
  },
}; 