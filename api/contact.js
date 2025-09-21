export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Example: integrate with SendGrid, Resend, or store in DB
  console.log("New message received:", { name, email, message });

  return res.status(200).json({ message: "Form submitted successfully!" });
}
