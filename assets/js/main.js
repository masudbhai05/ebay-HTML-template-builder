(function ($) {
    "use strict";

    // GLOBALLY get value 
    const labelHeadingInput = document.querySelector('#label-heading');
    const returnHeadingInput = document.querySelector('#return-heading');
    const returnImageURLInput = document.querySelector('#returnImageURL');

    // GLOBAL VARIABLIE 
    let previewWindow = null;
    let selectedCondition = '';
    const defaultLabelContent = `<p>All of our products, including sprinkler heads and other irrigation components, come directly from the manufacturer’s authorized distribution channels. Items distributed for retail display often include labels or stickers, but products sourced through these direct channels typically do not. This allows us to offer the same high-quality items at lower, more affordable prices for our customers. Rest assured, all items are genuine and meet the highest industry standards.</p>`;

    const defaultReturnContent = `<p>We aim for your complete satisfaction with a generous <strong>30-day return</strong> window at no cost to you. For a smooth process, please ensure returned items are in their original shipped condition, including all packaging and accessories. Items not meeting this requirement may be subject to a restocking fee. </p>`;

    // ----------------------Overview Quill Editor--------------------
    let toolbarOption = [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': ['#000', '#f15208ff', '#89ec07ff'] }, { 'background': ['#000', '#f15208ff', '#89ec07ff'] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'align': [] }],
        ['clean']
    ];
    const options = {
        debug: 'info',
        modules: { toolbar: toolbarOption, },
        placeholder: 'Write a product overview...',
        theme: 'snow'
    };

    const overviewEditor = new Quill('#overview-editor', options)
    // overviewEditor.enable(false);
    const labelEditor = new Quill('#label-editor', options); //Label Quill Editor
    const retunEditor = new Quill('#return-editor', options); //Return Quill Editor
    const promiseEditor = new Quill('#promise-editor', options);  //Promise Quill Editor
    const warrantyEditor = new Quill('#warranty-editor', options) //Warranty Quill Editor
    // warrantyEditor.enable(false);

    // /////////////////////////////// Main section start /////////////////////////////////

    // ✅ পেজ লোডের সময় default বসানো
    window.addEventListener('DOMContentLoaded', () => {
        if (labelEditor.getText().trim() === '') {
            labelEditor.root.innerHTML = defaultLabelContent;
        }
        if (retunEditor.getText().trim() === '') {
            retunEditor.root.innerHTML = defaultReturnContent;
        }
    });
    // ✅ Reset Button কাজ
    document.getElementById('resetLabelBtn').addEventListener('click', () => {
        labelEditor.root.innerHTML = defaultLabelContent;
        labelHeadingInput.value = `Why doesn't my item have a label or sticker?`;

    });
    document.getElementById('resetReturnBtn').addEventListener('click', () => {
        retunEditor.root.innerHTML = defaultReturnContent;
        returnHeadingInput.value = `Return & Refund policy`;
        returnImageURLInput.value = `https://i.postimg.cc/K8th1ZBZ/OBJECTS.png`;

    });

    // get vendor from the select option 
    document.getElementById("condition").addEventListener("change", async (event) => {
        selectedCondition = event.target.value;
    });

    // Generate dynamic HTML
    const generateHTML = async (selectedCondition) => {
        const title = document.querySelector('#main-title').value;
        const productImage = document.querySelector('#product-imageiURL').value;
        const specs = document.querySelector('#specification').value.split(';');
        const sku = document.querySelector('#sku').value;
        const vendor = document.querySelector('#vendor').value;
        const overviewHeading = document.querySelector('#overview-heading').value || 'Overview';
        const overviewContent = overviewEditor.root.innerHTML;
        const labelHeading = labelHeadingInput.value.trim();
        const labelcontent = labelEditor.root.innerHTML;
        const returnHeading = returnHeadingInput.value.trim();
        const returnImageURL = returnImageURLInput.value.trim();
        const retuncontent = retunEditor.root.innerHTML;




        return ebayTempate(
            title, vendor, sku, specs, productImage, selectedCondition, overviewHeading, overviewContent, labelHeading, labelcontent, returnHeading, retuncontent, returnImageURL
        );
    }

    document.getElementById('previewBtn').addEventListener('click', async () => {
        const html = await generateHTML(selectedCondition);
        if (!previewWindow || previewWindow.closed) {
            previewWindow = window.open('preview.html', '_blank');
            previewWindow.onload = () => {
                previewWindow.postMessage({ type: 'updatePreview', html }, '*');
            };
        } else {
            previewWindow.postMessage({ type: 'updatePreview', html }, '*');
        }
    });

    // Auto update preview
    // select all input, textarea, and select elements
    document.querySelectorAll('input, textarea, select').forEach((el) => {
        el.addEventListener('input', updatePreview);    // input / textarea
        el.addEventListener('change', updatePreview);   // select dropdown
    });

    // common function to update preview
    async function updatePreview(event) {
        if (event.target.id === "condition") {
            selectedCondition = event.target.value; // update selectedCondition
        }

        if (previewWindow && !previewWindow.closed) {
            const html = await generateHTML(selectedCondition); // pass condition
            previewWindow.postMessage({ type: 'updatePreview', html }, '*');
        }
    }



})(jQuery)