import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { HelpCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function SidebarTips() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="flex items-center space-x-2">
          <HelpCircle className="size-5" />
          <span className="font-sans">Guía Markdown</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-5">
          <SheetTitle className="flex items-center justify-between font-heading font-semibold">
            Guía Rápida de Markdown
          </SheetTitle>
          <SheetDescription className="font-sans">
            Sintaxis básica y ejemplos de uso.
          </SheetDescription>
          <SheetClose asChild></SheetClose>
        </SheetHeader>
        <div className="overflow-y-auto h-[calc(100vh-6rem)] pr-4 space-y-6">
          <section>
            <h3 className="underline font-sans text-md font-medium">
              Encabezados
            </h3>
            <p>
              <code># Encabezado 1</code> → <strong>Encabezado 1</strong>
            </p>
            <p>
              <code>## Encabezado 2</code> → <strong>Encabezado 2</strong>
            </p>
            <p>
              <code>### Encabezado 3</code> → <strong>Encabezado 3</strong>
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="underline font-sans text-md font-medium">
              Estilos de texto
            </h3>
            <p>
              <code>**Negrita**</code> → <strong>Negrita</strong>
            </p>
            <p>
              <code>*Cursiva*</code> → <em>Cursiva</em>
            </p>
            <p>
              <code>~~Tachado~~</code> → <del>Tachado</del>
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="underline font-sans text-md font-medium">Listas</h3>
            <ul className="list-disc pl-5">
              <li>
                <code>- Ítem de lista</code> &rarr; Ítem de lista
              </li>
              <li>
                <code>1. Ítem numerado</code> &rarr; Ítem numerado
              </li>
            </ul>
          </section>

          <Separator />

          <section>
            <h3 className="underline font-sans text-md font-medium">
              Citas y Código
            </h3>
            <p>
              <code>&gt; Cita</code> → <blockquote>Cita</blockquote>
            </p>
            <p>
              <code>`código en línea`</code> → <code>código en línea</code>
            </p>
            <p>Bloque de código:</p>
            <pre className="bg-gray-100 p-2 rounded">
              <code>```js console.log('Hola') ```</code>
            </pre>
          </section>

          <Separator />

          <section>
            <h3 className="underline font-sans text-md font-medium">
              Enlaces e Imágenes
            </h3>
            <p>
              <code>[Texto](https://ejemplo.com)</code> →{" "}
              <a
                href="https://ejemplo.com"
                className="text-primary-600 hover:underline"
              >
                Texto
              </a>
            </p>
            <p>
              <code>![Alt](https://fakeimg.pl/300/)</code> →{" "}
              <img
                alt="Ejemplo"
                src="https://fakeimg.pl/300/"
                className="max-w-full rounded"
              />
            </p>
          </section>
        </div>
      </SheetContent>
    </Sheet>
  );
}
