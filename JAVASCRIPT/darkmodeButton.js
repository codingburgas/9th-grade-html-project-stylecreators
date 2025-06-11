function DarkMode()
{
    

const originalStyles = {
    body: {
        backgroundColor: '#f4f4f4',
        color: '#333'
    },
    header: {
        background: '#000c5b',
        color: '#ffffff'
    },
    section: {
        background: '#fff',
        color: '#000c5b'
    },
    footer: {
        background: '#333',
        color: '#fff'
    }
};

const darkStyles = {
    body: {
        backgroundColor: '#333',
        color: '#f4f4f4'
    },
    header: {
        background: '#1a1a1a',
        color: '#ffffff'
    },
    section: {
        background: '#444',
        color: '#f4f4f4'
    },
    footer: {
        background: '#222',
        color: '#fff'
    }
};

let isDarkMode = false;

    document.getElementById('changeColorButton').addEventListener('click', () => {
        isDarkMode = !isDarkMode;

        const styles = isDarkMode ? darkStyles : originalStyles;

        document.body.style.backgroundColor = styles.body.backgroundColor;
        document.body.style.color = styles.body.color;
        document.querySelector('header').style.background = styles.header.background;
        document.querySelector('header').style.color = styles.header.color;
        document.querySelector('section').style.background = styles.section.background;
        document.querySelector('section').style.color = styles.section.color;
        document.querySelector('footer').style.background = styles.footer.background;
        document.querySelector('footer').style.color = styles.footer.color;
    });

}
DarkMode();
