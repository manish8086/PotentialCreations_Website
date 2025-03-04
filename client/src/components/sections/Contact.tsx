import { Mail, Phone, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold">Contact Information</h3>
            <p className="text-muted-foreground">
              Reach out to us for custom printing quotes, questions about our products, or to discuss your project ideas.
            </p>

            <div className="space-y-4 mt-8">
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">(770) 369-1116</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">bennecus@yahoo.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Text</h4>
                    <p className="text-muted-foreground">(770) 369-1116</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold">Send Us a Message</h3>
            <p className="text-muted-foreground">Fill out the form below and we'll get back to you as soon as possible.</p>

            <form className="space-y-4 mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input placeholder="First Name" required />
                </div>
                <div className="space-y-2">
                  <Input placeholder="Last Name" required />
                </div>
              </div>

              <div className="space-y-2">
                <Input type="email" placeholder="Email Address" required />
              </div>

              <div className="space-y-2">
                <Input placeholder="Phone Number" />
              </div>

              <div className="space-y-2">
                <Textarea 
                  placeholder="Tell us about your project or inquiry..." 
                  className="min-h-[120px]" 
                  required 
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}