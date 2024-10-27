const currentUser = JSON.parse(localStorage.getItem("current_user"));
if (!currentUser) {
    window.history.back();
}
if (currentUser.email !== "admin@gmail.com") {
    window.history.back();
}