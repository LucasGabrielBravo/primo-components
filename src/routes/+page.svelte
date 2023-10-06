<script>
  import HeroOne from "$lib/components/blocks/heros/HeroOne.svelte";
  import {} from "svelte/transition";

  let titulo = "Preserve as lembranças felizes com Amor e cuidado";
  let paragrafo =
    "Somos uma rede de cuidadores de excelência especializados em atencação domiciliar e hospitalar do Rio de Janeiro.";
  let botao1 = {
    label: "Pedir orçamento",
    url: "/",
  };
  let botao2 = {
    label: "Conhecer serviços",
    url: "/",
  };

  let diferenciais = [
    {
      titulo: "Assitencia",
      descricao: "teste",
      icon: {
        alt: "Teste",
        url: "https://www.climego.com.br/images/imagem-telefonista.png",
      },
    },
    {
      titulo: "Cuidadores Treinados",
      descricao: "teste",
      icon: {
        alt: "Teste",
        url: "https://www.climego.com.br/images/imagem-telefonista.png",
      },
    },
    {
      titulo: "Plano de cuidado individualizado",
      descricao: "teste",
      icon: {
        alt: "Teste",
        url: "https://www.climego.com.br/images/imagem-telefonista.png",
      },
    },
  ];
  let backgroundimage = {
    alt: "bgImage",
    url: "https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
  };
</script>

<div class="flex flex-col items-stretch">
  <div class="bg-red-500 h-60" />
  <div class="bg-blue-500 h-60" />
  <div class="bg-green-500 h-60" />
  <div class="bg-red-500 h-60" />
  <div class="bg-blue-500 h-60" />
  <div class="bg-green-500 h-60" />

  <div class="h-20">
    <HeroOne
      {botao1}
      {botao2}
      {titulo}
      {paragrafo}
      {diferenciais}
      {backgroundimage}
    />
  </div>

  <div class="bg-red-500 h-60" />
  <div class="bg-blue-500 h-60" />
  <div class="bg-green-500 h-60" />
  <div class="bg-red-500 h-60" />
  <div class="bg-blue-500 h-60" />
  <div class="bg-green-500 h-60" />
</div>
