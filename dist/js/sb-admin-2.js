$(document).ready(function() {
// $(function() {
//
//     $('#side-menu').metisMenu();
//
// });

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});

$('#coffee').click(function(e) {
myFunction1();
 });

 $('#shopping').click(function(e) {
 myFunction2();
  });

  $('#eating').click(function(e) {
  myFunction();
   });

   $('#drinking').click(function(e) {
   myFunction3();
    });

function myFunction() {
     $.ajax({
            url: "https://staging-api.getmondo.co.uk/transactions?expand[]=merchant&account_id=acc_000095qqFGFvC4afarKr7B",
            type: 'GET',
         beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaSI6Im9hdXRoY2xpZW50XzAwMDA5NFB2SU5ER3pUM2s2dHo4anAiLCJleHAiOjE0NTcyMTYyNzYsImlhdCI6MTQ1NzE5NDY3NiwianRpIjoidG9rXzAwMDA5NXJFa0pCT2w2UHhtWG04Q2YiLCJ1aSI6InVzZXJfMDAwMDk1cXFGRnl1REtHdW5rdjh2UiIsInYiOiI0In0.ktFfK8J4XYpUh5scsCn14HHXaL-LJ3_6Tv7-rO0rFoc');},
            success: function(res) {

                var mcdTransactions = res.transactions.filter(function (t) { return t.merchant && t.merchant.name === "McDonald's"; });

                mcdTransactions.forEach(function (t) {

                    $("#dataTables-example tbody").append("<tr class='odd gradeX'><td>" + t.merchant.emoji + "</td><td>" + t.merchant.name + "</td><td>" + -t.amount+ " GBP</td></tr>");

                    //$("#demo").append("<div>" + t.merchant.emoji + t.merchant.name+ t.amount + "</div>");
                    //$("#logo").text(t.merchant.emoji );
                    //$("#name").text(t.merchant.name);
                    //$("#currency").text(-t.amount+ " GBP");

                })

                console.log(res);

            },
    error: function() {
    console.log('error processing your requst');
    }
        });
}


function myFunction1() {
     $.ajax({
            url: "https://staging-api.getmondo.co.uk/transactions?expand[]=merchant&account_id=acc_000095qqFGFvC4afarKr7B",
            type: 'GET',
         beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaSI6Im9hdXRoY2xpZW50XzAwMDA5NFB2SU5ER3pUM2s2dHo4anAiLCJleHAiOjE0NTcyMTYyNzYsImlhdCI6MTQ1NzE5NDY3NiwianRpIjoidG9rXzAwMDA5NXJFa0pCT2w2UHhtWG04Q2YiLCJ1aSI6InVzZXJfMDAwMDk1cXFGRnl1REtHdW5rdjh2UiIsInYiOiI0In0.ktFfK8J4XYpUh5scsCn14HHXaL-LJ3_6Tv7-rO0rFoc');},
            success: function(res) {

                var mcdTransactions = res.transactions.filter(function (t) { return t.merchant && t.merchant.name === "Department Of Coffee A"; });

                mcdTransactions.forEach(function (t) {

                    $("#dataTables-example tbody").append("<tr class='odd gradeX'><td>" + t.merchant.emoji + "</td><td>" + t.merchant.name + "</td><td>" + -t.amount+ " GBP</td></tr>");

                    //$("#demo").append("<div>" + t.merchant.emoji + t.merchant.name+ t.amount + "</div>");
                    //$("#logo").text(t.merchant.emoji );
                    //$("#name").text(t.merchant.name);
                    //$("#currency").text(-t.amount+ " GBP");

                })

                console.log(res);

            },
    error: function() {
    console.log('error processing your requst');
    }
        });
}


function myFunction2() {
     $.ajax({
            url: "https://staging-api.getmondo.co.uk/transactions?expand[]=merchant&account_id=acc_000095qqFGFvC4afarKr7B",
            type: 'GET',
         beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaSI6Im9hdXRoY2xpZW50XzAwMDA5NFB2SU5ER3pUM2s2dHo4anAiLCJleHAiOjE0NTcyMTYyNzYsImlhdCI6MTQ1NzE5NDY3NiwianRpIjoidG9rXzAwMDA5NXJFa0pCT2w2UHhtWG04Q2YiLCJ1aSI6InVzZXJfMDAwMDk1cXFGRnl1REtHdW5rdjh2UiIsInYiOiI0In0.ktFfK8J4XYpUh5scsCn14HHXaL-LJ3_6Tv7-rO0rFoc');},
            success: function(res) {

                var mcdTransactions = res.transactions.filter(function (t) { return t.merchant && t.merchant.name === "Zara Oxford St"; });

                mcdTransactions.forEach(function (t) {

                    $("#dataTables-example tbody").append("<tr class='odd gradeX'><td>" + t.merchant.emoji + "</td><td>" + t.merchant.name + "</td><td>" + -t.amount+ " GBP</td></tr>");

                    //$("#demo").append("<div>" + t.merchant.emoji + t.merchant.name+ t.amount + "</div>");
                    //$("#logo").text(t.merchant.emoji );
                    //$("#name").text(t.merchant.name);
                    //$("#currency").text(-t.amount+ " GBP");

                })

                console.log(res);

            },
    error: function() {
    console.log('error processing your requst');
    }
        });
}


function myFunction3() {
     $.ajax({
            url: "https://staging-api.getmondo.co.uk/transactions?expand[]=merchant&account_id=acc_000095qqFGFvC4afarKr7B",
            type: 'GET',
         beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaSI6Im9hdXRoY2xpZW50XzAwMDA5NFB2SU5ER3pUM2s2dHo4anAiLCJleHAiOjE0NTcyMTYyNzYsImlhdCI6MTQ1NzE5NDY3NiwianRpIjoidG9rXzAwMDA5NXJFa0pCT2w2UHhtWG04Q2YiLCJ1aSI6InVzZXJfMDAwMDk1cXFGRnl1REtHdW5rdjh2UiIsInYiOiI0In0.ktFfK8J4XYpUh5scsCn14HHXaL-LJ3_6Tv7-rO0rFoc');},
            success: function(res) {

                var mcdTransactions = res.transactions.filter(function (t) { return t.merchant && t.merchant.name === "St Brides Tavern"; });

                mcdTransactions.forEach(function (t) {

                    $("#dataTables-example tbody").append("<tr class='odd gradeX'><td>" + t.merchant.emoji + "</td><td>" + t.merchant.name + "</td><td>" + -t.amount+ " GBP</td></tr>");

                    //$("#demo").append("<div>" + t.merchant.emoji + t.merchant.name+ t.amount + "</div>");
                    //$("#logo").text(t.merchant.emoji );
                    //$("#name").text(t.merchant.name);
                    //$("#currency").text(-t.amount+ " GBP");

                })

                console.log(res);

            },
    error: function() {
    console.log('error processing your requst');
    }
        });
}
});
