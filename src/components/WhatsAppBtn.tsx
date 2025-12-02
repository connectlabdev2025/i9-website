import { MessageCircle } from "lucide-react";

export default function WhatsAppBtn() {
    return (
        <a
            href="https://wa.me/557140421022" // Assuming this number works for WA
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-transform hover:scale-110 animate-bounce-slow"
            aria-label="Fale conosco no WhatsApp"
        >
            <MessageCircle size={32} />
        </a>
    );
}
