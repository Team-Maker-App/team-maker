import React from "react";
import modalStore from "../../store/modalStore";

const MatchForm = () => {
  const { closeModal } = modalStore();

  const handleSave = () => {
    closeModal();
  };
  return (
    <form class="space-y-8 ">
      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">Información del Partido</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">ID: JwjMZzH2OblRLuXdxIOJ</p>
        </div>
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6">
            <label for="location" class="block text-sm font-medium text-gray-700">
              Ubicación
            </label>
            <input
              type="text"
              name="location"
              id="location"
              autocomplete="location"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div class="col-span-4 sm:col-span-4">
            <label for="date" class="block text-sm font-medium text-gray-700">
              Fecha y Hora
            </label>
            <input
              type="text"
              name="date"
              id="date"
              autocomplete="date"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div class="col-span-2 sm:col-span-3">
            <label for="max_players" class="block text-sm font-medium text-gray-700">
              Jugadores
            </label>
            <input
              type="number"
              name="max_players"
              id="max_players"
              autocomplete="given-name"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
      <div class="text-right sm:px-6">
        <button
          onClick={handleSave}
          type="submit"
          class="bg-indigo-600 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default MatchForm;
