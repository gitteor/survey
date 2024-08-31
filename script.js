document.getElementById('startSurvey').addEventListener('click', function() {
    document.getElementById('initialScreen').style.display = 'none';
    document.getElementById('surveyScreen').style.display = 'block';
    showPage(1);
});

function showPage(pageNumber) {
    let pages = document.querySelectorAll('.survey-page');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(`page-${pageNumber}`).style.display = 'block';
}

function nextPage(pageNumber) {
    showPage(pageNumber);
}

document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('설문조사가 완료되었습니다. 감사합니다!');
    // 설문 응답 데이터를 여기에서 처리할 수 있습니다.
});
