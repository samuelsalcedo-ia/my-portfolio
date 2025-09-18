import React, { useState } from "react";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

export default function ContactSection() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.target as HTMLFormElement);
        // TODO: Reemplaza con tu endpoint de Formspree
        const formspreeEndpoint = "https://formspree.io/f/xblaezyg";

        try {
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                setSubmitted(true);
            } else {
                alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
            }
        } catch (error) {
            alert("Hubo un error de red. Por favor, comprueba tu conexión.");
        }
    };

  return (
    <section id="contact" className="py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
            <h2 className="mb-4 text-center">Hablemos de tu próximo proyecto</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Estoy siempre abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente, una vacante que encaje con mi perfil o simplemente quieres conectar, no dudes en escribirme. Estaré encantado de responderte lo antes posible.
            </p>
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
            <GlassCard className="p-8">
                {submitted ? (
                    <div className="text-center">
                        <h3 className="text-green-500">¡Mensaje enviado!</h3>
                        <p className="text-muted-foreground mt-2">Gracias por contactar conmigo. Te responderé pronto.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-foreground mb-1">Tu Nombre</label>
                            <input type="text" name="name" id="name" required className="block w-full rounded-md border-border/50 bg-background/50 p-2.5 focus:ring-purple-500 focus:border-purple-500" placeholder="Ej: Alex García" />
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-foreground mb-1">Tu Correo Electrónico</label>
                            <input type="email" name="email" id="email" required className="block w-full rounded-md border-border/50 bg-background/50 p-2.5 focus:ring-purple-500 focus:border-purple-500" placeholder="Ej: alex.garcia@email.com" />
                        </div>
                         <div>
                            <label htmlFor="message" className="block text-foreground mb-1">Tu Mensaje</label>
                            <textarea name="message" id="message" rows={4} required className="block w-full rounded-md border-border/50 bg-background/50 p-2.5 focus:ring-purple-500 focus:border-purple-500" placeholder="Hola Samuel, he visto tu portafolio y me gustaría hablar contigo sobre..."></textarea>
                        </div>
                        <button type="submit" className="w-full rounded-md bg-primary text-primary-foreground px-5 py-3 text-center hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                            Enviar Mensaje
                        </button>
                    </form>
                )}
            </GlassCard>
        </MotionWrapper>
      </div>
    </section>
  );
}