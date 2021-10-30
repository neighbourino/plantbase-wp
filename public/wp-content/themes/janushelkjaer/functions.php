<?php

add_action( 'wp_footer', 'astra_footer_align_bottom' );
function astra_footer_align_bottom () {
    ?>
    <script type="text/javascript">
        document.addEventListener(
            "DOMContentLoaded",
            function() {
                fullHeight();
            },
            false
        );
        function fullHeight() {
            var headerHeight = document.querySelector("header").clientHeight;
            var footerHeight = document.querySelector("footer").clientHeight;
            var headerFooter = ((headerHeight + footerHeight) + 40);
            var content = document.querySelector("#content");
            content.style.minHeight = "calc( 100vh - " + headerFooter + "px )";
        }
    </script>
    <?php
}