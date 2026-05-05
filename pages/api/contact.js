export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  try{
    const body = req.body
    console.log('Contact form submission:', body)
    // In production: send email or persist to DB. Here we just acknowledge.
    return res.status(200).json({ status: 'ok' })
  }catch(err){
    console.error(err)
    return res.status(500).json({ error: 'Server error' })
  }
}
