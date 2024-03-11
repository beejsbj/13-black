import { defineStore } from "pinia";

export const useInterfaceStore = defineStore("interface", function () {
  const firstLoad = ref(true);

  //
  //viewport size /////////////////////////////
  const isMobile = computed(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  });

  const isTablet = computed(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 1024 && window.innerWidth >= 768;
  });

  const isDesktop = computed(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= 1024;
  });

  //
  //main menu /////////////////////////////
  const mainMenuOpen = ref(false);
  function toggleMenu() {
    mainMenuOpen.value = !mainMenuOpen.value;
  }

  //
  //modal
  const showModal = ref(false);
  function toggleModal() {
    showModal.value = !showModal.value;
  }

  function notify(message) {
    //  toast(message, {
    //    position: toast.POSITION.BOTTOM_RIGHT,
    //    autoClose: 1500,
    //  });
  }

  return {
    firstLoad,

    isMobile,
    isTablet,
    isDesktop,

    mainMenuOpen,
    toggleMenu,

    toggleModal,
    showModal,

    notify,
  };
});
