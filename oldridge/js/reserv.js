<html>
    <head>
        <title>Корзина на jQuery - пример</title>
        <script type="text/javascript" src="jquery-1.4.2.min.js"></script>
        <script type="text/javascript" src="jquery.cookie.js"></script>
    </head>
    <body>


        <!-- Корзинка -->
        <div id="basket">
            <table>
                <tbody>
                    <tr class="hPb">
                        <td>Выбрано:</td>
                        <td><span id="totalGoods">0</span> товаров</td>
                    </tr>
                    <tr class="hPb">
                        <td>Сумма:</td>
                        <td><span id="totalPrice">0</span> руб.</td>
                    </tr>
                    <tr class="hPe">
                        <td colspan="2">Корзина пуста</td>
                    </tr>
                    <tr>
                        <td><a id="clearBasket" href="#">Очистить</a></td>
                        <td><a id="checkOut" href="/">Оформить</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <style>
        #clearBasket, #checkOut {
            display: none;
            }
        .hPb {
            display: none;
            }
        </style>
        <!-- Корзинка -->


        <a id="good-2356-500" href="#" class="addCart">В корзину (500руб)</a><br>
        <a id="good-23586-300" href="#" class="addCart">В корзину (300руб)</a><br>
            <a id="good-2357-700" href="#" class="addCart">В корзину (700руб)</a><br>






                <script type="text/javascript">
                $(document).ready(function(){
                    msg = new Array();
                    var basket = '';
                    var totalprice = 0;
                    var totalCountGoods = 0;
                    if (!$.cookie("basket")) {$.cookie("basket", '', {path: "/"});}
                    basket = decodeURI($.cookie("basket"));
                    basketArray = basket.split(",");// Находим все товары
                    for(var i=0; i<basketArray.length-1;i++) {
                    goodsId = basketArray[i].split(":"); // Находим id товара, цену и количество
                    totalCountGoods+=parseInt(goodsId[1]);
                    totalprice+=parseInt(goodsId[1])*parseInt(goodsId[2]);
                    }
                    if (totalprice > 0) {
                    $('#clearBasket').show();
                    $('#checkOut').show();
                    $('.hPb').show();
                    $('.hPe').hide();
                    }
                    if (!totalprice) {totalprice = 0;}
                    $('#totalPrice').text(totalprice);
                    $('#totalGoods').text(totalCountGoods);
                    });



                $('a.addCart').click(function() {
                    data = $(this).attr('id').split('-');
                    addCart(data[1], data[2], 1);
                    return false;
                    });



                function addCart(p1, p2, p3){
                    if (!p3 || p3==0) {p3=1;}
                    msg.id = p1; 		  // АйДи
                    msg.price = parseInt(p2); // Цена
                    msg.count = parseInt(p3); // Количество
                    var check = false;
                    var cnt = false;
                    var totalCountGoods = 0;
                    var totalprice = 0;
                    var goodsId = 0;
                    var basket = '';
                    $('#clearBasket').show();
                    $('#checkOut').show();
                    $('.hPb').show();
                    $('.hPe').hide();
                    basket = decodeURI($.cookie("basket"));
                    if (basket=='null') {basket = '';}
                    basketArray = basket.split(",");
                    for(var i=0; i<basketArray.length-1;i++) {
                    goodsId = basketArray[i].split(":");
                    if(goodsId[0]==msg.id)	// ищем, не покупали ли мы этот товар ранее
                    {
                    check = true;
                    cnt   = goodsId[1];
                    break;
                    }
                    }
                    if(!check) {
                    basket+= msg.id + ':' + msg.count + ':' + msg.price + ',';
                    } else {
                    alert("Уже есть в корзине!");
                    }
                    if(!check) {
                    alert("Добавлено!");
                    basketArray = basket.split(",");// Находим все товары
                    for(var i=0; i<basketArray.length-1;i++) {
                    goodsId = basketArray[i].split(":"); // Находим id товара, цену и количество
                    totalCountGoods+=parseInt(goodsId[1]);
                    totalprice+=parseInt(goodsId[1])*parseInt(goodsId[2]);
                    }
                    $('#totalGoods').text(totalCountGoods);
                    $('#totalPrice').text(totalprice);
                    $.cookie("totalPrice", totalprice, {path: "/"});
                    $.cookie("basket", basket, {path: "/"});
                    }
                    }



                $('#clearBasket').click(function() {
                    $.cookie("totalPrice", '', {path: "/"});
                    $.cookie("basket", '', {path: "/"});
                    $('#totalPrice').text('0');
                    $('#totalGoods').text('0');
                    $('.hPb').hide();
                    $('.hPe').show();
                    $(this).hide();
                    $('#checkOut').hide();
                    $.jGrowl("Корзина очищена!");
                    return false;
                    });

                </script>

                <br>
                    <a href="http://makecode.ru/2011/01/basket-jquery/">Вернуться к статье - Корзина на jQuery</a>








                </body>
            </html>