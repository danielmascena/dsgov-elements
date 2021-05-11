<template>
    <footer class="br-footer [inverted]">
    <div class="container-lg">
        <div class="logo">
            <img src="https://url-da-imagem.png" alt="Texto alternativo" />
        </div>
        <div class="br-list" collapsible horizontal two-lines unique>
            <div class="col">
                <a class="br-item" href="javascript:void(0);" link>
                    <div class="content text-down-01 text-bold text-uppercase">
                        Categoria
                    </div>
                    <div class="support"><i class="fas fa-angle-up"></i></div
                ></a>
                <div class="br-list">
                    <a class="br-item" href="javascript:void(0);" link>
                        <div class="content">Item da Lista</div></a
                    >
                </div>
            </div>
        </div>
        <div class="d-none d-sm-block">
            <div class="row align-items-end justify-content-between py-5">
                <div class="col social-network">
                    <p class="text-up-01 text-extra-bold text-uppercase">
                        Redes Sociais
                    </p>
                    <a href="" class="mr-3">
                        <img
                            src="https://url-da-imagem.png"
                            alt="Texto alternativo"
                        />
                    </a>
                </div>
                <div class="col assigns text-right">
                    <img
                        class="ml-4"
                        src="https://url-da-imagem.png"
                        alt="Texto alternativo"
                    />
                </div>
            </div>
        </div>
    </div>
    <div class="br-divider my-3"></div>
    <div class="container-lg">
        <div class="info">
            <div class="text-down-01 text-medium pb-3 text-center">
                Texto destinado a exibição de informações relacionadas à
                <strong>licença de uso.</strong>
            </div>
        </div>
    </div>
</footer>

</template>
<script>

import "../../../../node_modules/@govbr/dsgov/dist/dsgov-base.css";
import "../../../../node_modules/@govbr/dsgov/dist/dsgov.css";
import "../../../../node_modules/@govbr/dsgov/dist/components/footer/footer.css";

export default {
    name: "AppFooter",
    props: {
        
    },
    data() {
        return {
          categoria1: 'Shopping List App',
          itemsCategoria1:[
            {id: 1, label:'10 party hats', href:'http://www.google.com'},
            {id: 2, label:'2 board games', href:'http://www.youtube.com'},
            {id: 3, label:'20 cups', href:'http://www.gmail.com'}
          ]
        }
    },
    methods: {
        activateLoad() {
            
        }
    }
}
</script>

