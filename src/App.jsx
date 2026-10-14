import { createSignal, For, Show } from "solid-js";
import "./index.css";

function App() {
  // Texto que se escribe en el formulario.
  const [texto, setTexto] = createSignal("");

  // Lista reactiva con las tareas.
  const [tareas, setTareas] = createSignal([]);

  // Añade una nueva tarea a la lista.
  function agregarTarea(evento) {
    evento.preventDefault();

    const nombre = texto().trim();

    // No permite añadir tareas vacías.
    if (nombre === "") return;

    setTareas([
      ...tareas(),
      {
        id: Date.now(),
        nombre: nombre,
        completada: false
      }
    ]);

    // Limpia el campo de texto.
    setTexto("");
  }

  // Cambia el estado de una tarea.
  function cambiarEstado(id) {
    setTareas(
      tareas().map((tarea) =>
        tarea.id === id
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      )
    );
  }

  // Elimina una tarea por su identificador.
  function eliminarTarea(id) {
    setTareas(
      tareas().filter((tarea) => tarea.id !== id)
    );
  }

  // Cuenta las tareas que todavía no están completas.
  const pendientes = () =>
    tareas().filter((tarea) => !tarea.completada).length;

  return (
    <main class="contenedor">
      <h1>Mi lista de tareas</h1>

      <p>
        Tareas pendientes: <strong>{pendientes()}</strong>
      </p>

      <form onSubmit={agregarTarea}>
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={texto()}
          onInput={(evento) => setTexto(evento.currentTarget.value)}
        />

        <button type="submit">Añadir</button>
      </form>

      <Show
        when={tareas().length > 0}
        fallback={<p>Aún no tienes tareas.</p>}
      >
        <ul>
          <For each={tareas()}>
            {(tarea) => (
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={tarea.completada}
                    onChange={() => cambiarEstado(tarea.id)}
                  />

                  <span
                    class={tarea.completada ? "completada" : ""}
                  >
                    {tarea.nombre}
                  </span>
                </label>

                <button
                  type="button"
                  onClick={() => eliminarTarea(tarea.id)}
                >
                  Eliminar
                </button>
              </li>
            )}
          </For>
        </ul>
      </Show>
    </main>
  );
}

export default App;