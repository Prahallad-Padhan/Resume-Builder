console.log(10)

document.getElementById('generate-resume').addEventListener('click', generateResume);
document.getElementById('print-resume').addEventListener('click', () => {
    winndow.print
});

function generateResume() {
    const photoInput = document.getElementById('photo');
    let photoUrl = '';
    if (photoInput.file[0]) {
        photoUrl = URL.createObjectURL(photoInput.file[0]);
    }

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    const preview = document.getElementById('resume-preview');
    preview.innerHTML
}
