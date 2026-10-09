export default function handler(req, res) {
  // Retorna a variável de ambiente configurada no Vercel para o frontend
  res.status(200).json({
    apiUrl: process.env.GOOGLE_SHEETS_WEB_APP_URL || ""
  });
}
