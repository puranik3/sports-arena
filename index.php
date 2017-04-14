<!DOCTYPE html>
<html ng-app="GameBookingApp">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Game slot booking | Home</title>
        <meta name="description" content="Using this application you can book/cancel slots for various games.">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="public/external/bootstrap-3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="public/external/bootstrap-3.3.7/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="public/external/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css">
        <link rel="stylesheet" href="public/external/font-awesome-4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="public/css/app.css">
    </head>
    <body>
        <div class="page-container-outer">
            <div class="page-container-inner">
                <?php require "./server/header.php" ?>
                <div ng-view></div>
                <?php require "./server/footer.php" ?>
            </div>
            <div class="page-background-image-container">
                <img src="public/img/arena-pics/A68A8948.jpg" class="page-background-image" />
                <div class="page-background-image-overlay"></div>
            </div>
        </div>
        
        <script src="public/external/angular-1.6.3/angular.min.js"></script>
        <script src="public/external/angular-1.6.3/angular-route.min.js"></script>
        <script src="public/external/moment.min.js"></script>
        <script src="public/external/underscore-1.8.3.min.js"></script>
        <script src="public/external/jquery-3.2.0.min.js"></script>
        <script src="public/external/bootstrap-3.3.7/js/bootstrap.min.js"></script>
        <script src="public/external/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js"></script>
        
        <script src="public/app/app.js"></script>
        <script src="public/app/services/game-service.js"></script>
        <script src="public/app/services/slot-service.js"></script>
        <script src="public/app/directives/show-tab.js"></script>
        <!--
        <script src="public/app/directives/show-dialog.js"></script>
        -->
        <!--
        <script src="public/app/controllers/game-list-page.js"></script>
        <script src="public/app/controllers/game-booking-page.js"></script>
        -->
        <script src="public/app/components/game-list/game-list.js"></script>
        <script src="public/app/components/game-booking/game-booking.js"></script>     
    </body>
</html>