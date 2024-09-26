window.onscroll = () => {

    let MaxHeight = window.document.body.scrollHeight - window.innerHeight
    let percentage = ((window.scrollY)/ MaxHeight) * 100

    document.querySelector('#scroll-indicator').style.width = percentage + '%'; // it should be id to use querySelector
}