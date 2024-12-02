import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 w-full">
      <div className="grid grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Card 1: Spanning 2 Columns */}
        <Card className="col-span-2 p-6 min-h-[600px]">
          <CardHeader>
            <CardTitle className="text-2xl">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We'd love to hear from you! Please fill out the form or contact us
              directly at{" "}
              <a href="mailto:contact@example.com">contact@example.com</a>.
            </p>
          </CardContent>
        </Card>

        {/* Card 2: Spanning 1 Column */}
        <Card className="col-span-1 p-6">
          <CardHeader>
            <CardTitle className="text-2xl">Office Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4">
              <li>Monday - Friday: 9am - 5pm</li>
              <li>Saturday: 10am - 3pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
