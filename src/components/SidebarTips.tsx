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
        <Button
          variant="outline"
          className="flex items-center space-x-2 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-600"
        >
          <HelpCircle className="size-5 text-text-light dark:text-text-dark" />
          <span className="font-sans text-text-light dark:text-text-dark">
            Guía Markdown
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white dark:bg-surface-dark">
        <SheetHeader className="mb-5">
          <SheetTitle className="flex items-center justify-between font-heading font-semibold text-text-light dark:text-text-dark">
            Guía Rápida de Markdown
          </SheetTitle>
          <SheetDescription className="font-sans">
            Sintaxis básica y ejemplos de uso.
          </SheetDescription>
          <SheetClose asChild></SheetClose>
        </SheetHeader>
        <div className="overflow-y-auto h-[calc(100vh-6rem)] pr-4 space-y-6">
          <section>
            <h3 className="underline font-sans text-md font-medium text-text-light dark:text-text-dark">
              Encabezados
            </h3>
            <p className="text-text-light dark:text-text-dark">
              <code className="bg-gray-100 dark:bg-gray-700 p-1 rounded">
                # Encabezado 1
              </code>{" "}
              → <strong>Encabezado 1</strong>
            </p>
            <p className="text-text-light dark:text-text-dark">
              <code className="bg-gray-100 dark:bg-gray-700 p-1 rounded">
                ## Encabezado 2
              </code>{" "}
              → <strong>Encabezado 2</strong>
            </p>
            <p className="text-text-light dark:text-text-dark">
              <code className="bg-gray-100 dark:bg-gray-700 p-1 rounded">
                ### Encabezado 3
              </code>{" "}
              → <strong>Encabezado 3</strong>
            </p>
          </section>

          <Separator className="border-gray-200 dark:border-gray-600" />

          <section>
            <h3 className="underline font-sans text-md font-medium text-text-light dark:text-text-dark">
              Estilos de texto
            </h3>
            <p className="text-text-light dark:text-text-dark">
              <code className="bg-gray-100 dark:bg-gray-700 p-1 rounded">
                **Negrita**
              </code>{" "}
              → <strong>Negrita</strong>
            </p>
            <p className="text-text-light dark:text-text-dark">
              <code className="bg-gray-100 dark:bg-gray-700 p-1 rounded">
                *Cursiva*
              </code>{" "}
              → <em>Cursiva</em>
            </p>
            <p className="text-text-light dark:text-text-dark">
              <code className="bg-gray-100 dark:bg-gray-700 p-1 rounded">
                ~~Tachado~~
              </code>{" "}
              → <del>Tachado</del>
            </p>
          </section>

          <Separator className="border-gray-200 dark:border-gray-600" />

          <section>
            <h3 className="underline font-sans text-md font-medium text-text-light dark:text-text-dark">
              Listas
            </h3>
            <ul className="list-disc pl-5 text-text-light dark:text-text-dark">
              <li>
                <code className="bg-gray-100 dark:bg-gray-700 p-1 rounded">
                  - Ítem de lista
                </code>{" "}
                &rarr; Ítem de lista
              </li>
              <li>
                <code className="bg-gray-100 dark:bg-gray-700 p-1 rounded">
                  1. Ítem numerado
                </code>{" "}
                &rarr; Ítem numerado
              </li>
            </ul>
          </section>

          <Separator className="border-gray-200 dark:border-gray-600" />

          <section>
            <h3 className="underline font-sans text-md font-medium text-text-light dark:text-text-dark">
              Citas y Código
            </h3>
            <p className="text-text-light dark:text-text-dark">
              <code className="bg-gray-100 dark:bg-gray-700 p-1 rounded">
                &gt; Cita
              </code>{" "}
              → <blockquote>Cita</blockquote>
            </p>
            <p className="text-text-light dark:text-text-dark">
              <code className="bg-gray-100 dark:bg-gray-700 p-1 rounded">
                `código en línea`
              </code>{" "}
              → <code>código en línea</code>
            </p>
            <p className="text-text-light dark:text-text-dark">
              Bloque de código:
            </p>
            <pre className="bg-gray-100 dark:bg-gray-700 p-2 rounded text-text-light dark:text-text-dark">
              <code>```js console.log('Hola') ```</code>
            </pre>
          </section>

          <Separator className="border-gray-200 dark:border-gray-600" />

          <section>
            <h3 className="underline font-sans text-md font-medium text-text-light dark:text-text-dark">
              Enlaces e Imágenes
            </h3>
            <p className="text-text-light dark:text-text-dark">
              <code className="bg-gray-100 dark:bg-gray-700 p-1 rounded">
                [Texto](https://ejemplo.com)
              </code>{" "}
              →{" "}
              <a
                href="https://ejemplo.com"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                Texto
              </a>
            </p>
            <p className="text-text-light dark:text-text-dark">
              <code className="bg-gray-100 dark:bg-gray-700 p-1 rounded">
                ![Alt](https://fakeimg.pl/300/)
              </code>{" "}
              →{" "}
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
