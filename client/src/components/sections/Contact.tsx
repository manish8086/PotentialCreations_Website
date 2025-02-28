import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center hover:border-primary/50 transition-colors">
            <CardContent className="pt-6">
              <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Email Us</h3>
              <Button variant="link" className="text-lg" asChild>
                <a href="mailto:contact@potentialcreations.com">
                  contact@potentialcreations.com
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:border-primary/50 transition-colors">
            <CardContent className="pt-6">
              <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Call Us</h3>
              <Button variant="link" className="text-lg" asChild>
                <a href="tel:+1234567890">
                  (123) 456-7890
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:border-primary/50 transition-colors">
            <CardContent className="pt-6">
              <MessageSquare className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Text Us</h3>
              <Button variant="link" className="text-lg" asChild>
                <a href="sms:+1234567890">
                  (123) 456-7890
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
