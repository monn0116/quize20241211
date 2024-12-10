<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>スタートページ</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div class="text-center">
        <h1 class="mb-4">ようこそ！</h1>
        <button id="startButton" class="btn btn-primary btn-lg">スタート</button>
    </div>
    <script>
        document.getElementById('startButton').addEventListener('click', function() {
            window.location.href = 'question.html';
        });
    </script>
</body>
</html>