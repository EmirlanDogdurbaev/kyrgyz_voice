import { useParams } from "react-router-dom";
import classes from "./Lessons.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Quiz from "../Quiz/Quiz";

const Lessons = () => {
  const { id } = useParams();
  const [audioSrc, setAudioSrc] = useState(''); 

    function playAudio(audioData) {
        const audioURL = URL.createObjectURL(audioData);
        var audioElement = new Audio(audioURL);
        audioElement.play();
    }

    useEffect(() => {
        let lastSelectedText = '';

        function getSelectedText() {
            let selectedText = '';
            if (window.getSelection) {
                selectedText = window.getSelection().toString();
            } else if (document.selection && document.selection.type !== 'Control') {
                selectedText = document.selection.createRange().text;
            }
            return selectedText;
        }

        document.addEventListener('mouseup', async function () {
            const selectedText = getSelectedText();
            if (selectedText !== '' && selectedText !== lastSelectedText) {
                console.log("Выделенный текст:", selectedText);
                try {
                    const response = await axios.post('http://192.168.243.149:8000/api/v1/tts/send', { text: selectedText }, { responseType: 'blob' });
                    const audioUrl = URL.createObjectURL(response.data);
                    setAudioSrc(audioUrl);
                    const audio = new Audio(audioUrl);
                    audio.play().catch(error => console.log("Ошибка воспроизведения аудио:", error));
                } catch (error) {
                    console.error('There was a problem with the POST request:', error);
                }
                lastSelectedText = selectedText;
            }
        });

        return () => {
            document.removeEventListener('mouseup', () => {});
        };
    }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, [id]);

  return (
    <div className={classes.Lessons}>
      <section>
        <h2>Кошмок сөздөр</h2>
        <div>
          <p>
          Тутумдашкан эки же андан көп сөздүн (негиздин) ортосундагы синтаксистик байланыш мааниси солгундап же жоголуп, алар биригип лексикалык бир гана мааниге ээ болуп калат. Мына ушундай татаал сөздөр кошмок сөздөр деп аталат.
          </p>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAD7CAMAAAD3qkCRAAABnlBMVEUpLUr/Vll/2lcpLUkoKkkqLEomLUuG4WEqKEXpVVs2T0YoLkj+V1cpLEz/v1sqKEv/XV7/WVUuOkmB3lfPT1N6P09kpVI6T00LK0dFLUQpN0FwvlVJbVAmG02H4GbCTVJXMEa8SVPKTVg0LUZsO1AoMUcTKEmIPkv/wlkfJD8jGUZws1l+1lunQk5FY09uuVj/xGVMdk/WpV8wP0WlgFQQHELmsFc2NElakVJIRUiAaUz3uVlEX1ImH0iqglrEl1ddU04QGUVsXU6wi1NEPktvYE1qPVCXeVIhHz/rsGTfV1qQP011P0xXR0o+OktEQUhRhU1pnlwJGDi2ucBCK0yhSlKvRFbyXFt9P0lFMkQYJ03WVl7GT0+0Rk2BPVPhVFFRL0xeNUOPO1TetGxZVlTEnVa6l196aViFbEx0WUsAFEWrjU5uVEisfFHaoFy4ik81LjgADzp3Z0phW0tuXFmgg17ftVuNbj9jW1pZhVtSkUZvw01JXVMfJzN3tmmI1m7VomeUb1RUSVN6f4VdXGqWlp/IzdNPUGWjpqzo6++6QiQxAAAaWklEQVR4nO1di0MTR/5fmNkxOEyGV0QEyyMPNoKYhGwiiTEPiEnEAGo9cK2UXk+J/dniq+1ZvGur1Xr/9e/7nd1NAmLrA9L2bj8tZjM7Ozuf+T5nHxNN8+DBgwcPHjx48ODBgwcPHjx48ODBgwcPHjx48ODBgwcPHjx4+DBwnfD277quaxrBjT3lnAtCiL73WF2Euc6gUOfELqG6Bl/db86ROml9J9oB0PUDi98ThHHB2iCE4NgwDxOtvVhnmtQ42wNi95ox6K3TbabjDr1FmXMehmPbqMAZ2L52+GEw0bngvjZw7lNDyHyctheLsNB9+0CJJELgXun0hVFpN9JsH75LSZtfKaH7W/H52KHIROeRsz17MBmBgWPBy3sKb0XCkc2e/Zg66WMT8Ln+95OaZh+1Dl9DEZ9NhWiRG5/D7kCkqWDs0zda6blx8hCIaDo7Odm1B5dHgjr0qa+3t61w/dN0ZLp3b8Wu3p6RIJ/o6+rq/9sI9FSwyGR/V3//0MSWIxMQ8Hpvf3//raArJSFG+t5oZnLkUGTyBpOezRHxJpPNkQOYrG+MKCZdUwHoizw53QvdXJ8OTDjqxNlGV29vf1//dNCxHMHeZNI1FPAdHpNeOCMCmUzf5C0muAOZbNyMTPerbfVdfTaZ9I4HdJ2zkXWo3Xdj8xIT9iBTa7xXtTw+QtuZ2IV28/A3FAgeIpPx8cnJyampqcmp24FPmc2kt2dqyMFkYCty6TZuja+rYRxXpS0mQSqjt7CH45uBoHAkwHzr9qh/HnK0S9pMeqY+U81ODR06k67pKyEHgSsjjkx6pwKqNBAIbAZGOIvgdugWjGPfdMAubzERJ2/09/b3Xt7c2OK6sBuPLDua1HcjuIfJVOjKFTg6EEKNPVQmvV3LIXCPEBbBKQaJzQRsNxDkQQeScIGffBJ7Nz2hB4O+oK4zZfFTV7gIgW719y1vhpjQHJlEbvUrfezq+myCqahia1f/VOBT1ai+1XfYMulbnmiPZzYTkIm+P2jpkXElkwl72InLhPDL2MztQFuvGPQThmMd2KxfsZuXLpMgwwbg21EwQexnEuT767+FSfRvaO1DoG/hZhyM3EAfcWMS/dfZoPDtYaIdFZPby1cCoYkRHgElosTRrqkAi5yMIE5CKvB2Jr2TlwKo/uvLmxOsmZ3xSI/y1Mtgcf1DWwylK46cSX9XX19fb9/65WWfJcI2k97+9aHJyduTiBtU28dEtjHp/3yop7+3q+/sdKiljFzt6hq68sVljCkBvle7joyJcu/YqZ4rEd2JjCAV1+2v+4h4OxNsoB9dHah/i4l1G5s8GwguYwAB9eoIE4yDvfgvhDug4jDBTMOOmOvgb9/OBCrCP+Cat1jLa5BoD4bU6QB2vq/3sgr8R69dqFx9dh7R3zPhymRPtvJb2mUfeCtE2xwEuwT0uj7bmODWkGqhMxbfuzwNuDFlZ3RBZttJV8+6g8ubN9nbmXT1YSzv7T0baWMSud2PITEwwiIbyPM2ttAB7VoOTSBuYEbUE2JujN+cDmwgpjGtfDuT8cB4bx/oVyjSjD88uA7a+nkgFI1Eo8oAQwwmQx1gMgGzO0hILnehUQTZp3Y82bo5YuNm+jdkAtnKyC3UpcufOhYPlhZAqfZcvoWub12ZEdF4J2QyIWA6zU9OoXlPj9iRcWgTpulCwc0ADraT8ZAY6VEq5ObnxBpHh4g+w854u/onbzLSESacE8FPXgYC69Nb1NGuoOAEwQn9LYsfv+KLbGJ5/yZVnAUqFzgCaE2RQdfYc4mRjmgXYxxmuDiAPdNbtsUPXQm6VySkY8tv0a4rlOOEEWxsi6lsRUwr5+EEpH508X3TwU5o141QMPjpxNk+1PbJjZv2TGto+YsvJmxAuvKbTLhP+npw8D9T2Qo7iZ63qzVXx3aHtujRy6QXw8l6H0R5NX0NCjsydqmwh3Ouk86U42DtglwYspMQzHO7+m+A/yLyJh7/+WZgc3MT5iEb0+im1690gElrbt7fd3YjFBb75vE9E8Hf8F3ABARBT56FlKB//QsmOcyxIBzdDkw4ni84jq3cCB69drWIrJ+F7Inz/VckpluRsestTDiXl/HayuUg4xS2wO9u+BzPFwmpae7EETIhemQS06I+pUd9PZPTgcBNidnKHqxvjNhemFiT/VAdHIT6ysUEqtE4XlshoF8wq+rtm8Q0GIqHNkLo9eBPJ5F1KOkJMOg7yA2YoDkRm9dhMRFbm2cd3Fje2AxcUrMrElg+246NLbvrQmwF4Ou0w0Qj6dDy7bPLm841yNANrHxJ3gzB4csbrQtZbALb+zuEFLXHZqKJ4CX8Nn0YTATnkbC6EnEJELoE9kApDtfJrdAe3HQuK3KqQ70rW/bhoFHsZgiOs/sCU/1L0FIoKCJfQIOhtiRfBqHgyoQQ4ZuwI8TVxW7GLDw6dBhMNIh5gglKKYYNSpggRJ1EENoGQpgzvIzBAaBI9jcVMyl3p81EOC1phDL4dFy3PWY6lEAzOtQQzgUxGAkq4PC2ah7+x0B0SMch9PEweY/7A5Cx6XpYcKGL/Rdo/jBIvHcFpiqElO/BRBIe1nTONc5+v3ZnQBjLRUWY+KJR/u62CZmYFDpn0fYbQ380ZCNWu8b1h1/6v43aVGCgdSotyzRNSQ4e82gitlgkVikWq/9pXJOg943YYrRY8BuL/6DojhmXVnT1fiP5f3e+LMiDlcfMG6mC+fCukS2v/GnUS1a/zMby+aw/9nOBYq+IFU0msoZh+P1GMn3wkFuPY0ZqMeH35zNp/cAahwsIeTCzxb4IRmAmTyXM6wTHgUevgzdU9bDOlr70Q6ez32+vwHeuRx7XYn6gAYjlF/BoKIQ9Am/thlVgFbrZgDqGkcg8geno0ZuKrlsRi3GkJCzLkoIIUH+J3pbIaNRiYcktK2rlKjt3k5nSkkUgwIPyAw8jm6ol8osVZQZ4+zoaUVZjXzWNWNKsL+7sVO494ZbsgM0Tq5xplCwN/X8G4OM0k2ksYeolfRncJdNQvCTpSr1eb2w3CpLLagqIJCr37pVKhUJhCbspIvLexXw++aRqoTxpIZPZhkMXCvV7me1Mmh29fhEzAQoQhLh37W4sFltc4g9ihlGBxJKYizDud8JyNWbEfiaCW1/tYIEuIhVQqv+7V6k06iAEUEYimZlJKTnFaqUipGZW0jBiQR2yMA7NGQXy7nHog2GCTabKRLu2aGSNfKYkwzG/f3GBcus+bPi/eSwXslBQoHrkHhYk/hmNfuk3El+njJg/VmtUOZqYmUTjN5CLv2ISEUn6/dlHkBmYd9CcKkuyQ0xKFMcZjLNEqWJSFyKYwm65TOo07EuhhX9TkiA1f0LZO9S4WwTBFitwUDaxs5OAurGMRRSTMphew8gqJh2SSa0c2Y5ljVqjzCHHVkyIedePfUi4TJiZj+G4J0rWfdttpVJYwUgWCV0BzUo1yo8LC5mUYaRWmGXLRKZjysFVljoQHIFJtlYogzanMtuEasyWSeQeKFsWmVDFZCGSUZ0CJmbGAJKpnx+V7i/GIMaUpJWM+bOZUrpYNL8q+GP+ZNSWCcdhwgHpFBN/dgd6nWpsP4B4YDNZ8MG/iVqLyfMHNWAB+pUoFYGJH+S3GqaRBmzucDPlz6byi0nAxQrUzq8omZSrFVC/nU7KBJUlW8ms4tVDZGIsLt2Fcc+kFJNVZLJ61zDsApAJCDC/PUBhvmiChiWefxVTJuPCn/iHiUxK9azfyFcUkw7kK0oBUF0qdnakmCRBXYyvSzXDZZJE35QsKyZWAbkWVIIPPtyfKjyMKZtyYaSeKCZlsP9UptFJi8+mwJizdctl4gdt8ye2FxJNmexkYewfLaC6legSMlmQhLme7yFShnjuYrGEdpJSerVd6iATI3Ufh7wWpEzYTKDv2caThwnVcWSiCu49tJlUU1kjsYrZmYW+6c4TMw/9LjyvF+r154WL8FdHOwGtNfKPFgodtBMYVVOFk6jLBHQ+mVkpguqgCLKofrHk9spDtPoShQDuNypfcSnNn3DriYmOLvkQ8jbrYdKobVsMZQKoZR5XO8zEV7yImUiEukwS5QVp2kxWVdjIbxeEqZhAkoiJyeK9euYbNO9HS1oEA+ViYWWlAEHHqC0JJRN/7PvtdNRhwoDmkRLRVWQsUXLtDnT34jWO2QpYcaPE1K5vHlsoE3BkT7goppRMdCujgmQM05NsAwrkUg07XsuiA8tWtrl1EeWY334uWQHCUnJFrHz7beU9rgK8P3gR7eQJzNXDMK7Gt0WeRp/8/XZQcPM7v/FNwVrFble205Jd+04JSdOKGXd6kvp5e4Xq3FqtKa+F5vb9o1VUQBiOTMEiEtK3WGXJKkGiunQYz9a9Fbm7MMu4pxNdphPfpb4r59KJVCq/vUCZrMKu/GO5mqil8pnnlGvVu4lavgwui5v1RCqbzda+3t5eFVwCFV+lVsOSncz2kiTVRi2VqpTDjNCFRKpWWbUq4NvLRxlVmFZcKJWeMA2mWNVC+d72kjCflMtPKNGIMGHXP6k0C1DDB9MOYi6Uy/9Uz0ULXsg0MuVSPSgY3urVWWS1pEoKaQoSzq2USkASsnlaLZW3l8C9ZR/940jjI5c46SU4ARaM5ig+S0SpusogtDDuEiIqqbSnuLDH0XUpSTpN8Ipxc1CorkrUFFK1woXalhal4D3ulFeOdL4lCMObu+rGjNCIDuYL81d1iUoIGFP4Xw8zmKbjU+dQQYTt4+C7ej69Ncz4+DcRTE0PuYatCtUq59CAmaglS4we0IGjwxv+5X0dDlF/+48yC+DXP7hTfyZARiD+RBcjPwJChzztv4IJmtV7K6oHDx48ePDgwYMHDx48ePDgwYMHDx48ePDgwYMHD/9loPug3pbRpdxTSBih+4rsO+8tYAW8u6sOt+/qi9btOCKkarvtBt0b7UlcuO1Daei6mD++F/biW/sKJZMDx4f3FQ7L9kcFCO6fp+pdfyFVq8OtfsHhgAGteSeb0OP7m4OjP4KJyJ04tgfnioJrdP6TwfbC0dM8t3ZsHwbPFduY0FPHBgePXS1K7IzE4wePjeWau0+fwAavnm4eoYf3ngIbnDlNP/hVKF2cOTHY3Q3/u9i9MCCASVsJ7IbC3NpgW0W1PXphoEWFDhyD0plnYaExrXoO9584PufuFQOzeNTsnLsknqZXj7WdwP4492xAfPj94dMn9nS6e3dsHpkcay8b3I3Pn3m6tx5gNN7OBGTSPXhuLCwEP3N+cBYPig/bz3cInourBo+dH3Cf+NCjn+xrcLZ7dGzgIx7Os5kMNtHGpK0wPn96zd50RGKXHsREhnMXYLN7dm1szuk203Iz9oHnLriG4jBpa7T7MJjM/vB0zUV8ntpMBs+tnXcRH5bzc2prV1VXm6rqfiYDgkZ/RN26OjbmrrbEBD9m93Y27r5fajPZdU/ww2ExeTp3wcEcKr/NZGbswpyLecHlM/h8Nqr64+wZ2M9kBrQrdxUUZXA0Hp93X7HVc08dGxu8Ou+8VqOYAHP3BIfFZO1CTjrw4Vv7DhNO3UKKa2PAxpkZxWRYqmiwz3cpJrmxQYds0xHpOfQAs7PoJeZcdg6TU/Yp+OyhMaH4VJr9PjtpMtGIAyoI4/jMVpPJfs/fZDIAujU4eH5szkfc1x/lMIpj5hxaRDys72XiU2cMHxaTp8O5ai6Xkz5n1UCHSVhSXcF9ekY4TI6/8dAZMpmFQ6Jo2/A5NtB6nOvMGpYpWxg84dgWMhlEu1Jf6WEx6R49cfXq1fNj87mccJlAcBj7V7SqENXc4f1NJshAOevd+Nhwi4ie24VOz8bjP+KuuaNl4njDYzNzp3E9WtsLz87+6ODfpnw3Jt2zykWtjV3wuWLUNam88kx8GE91bM2OfkfGxA3dg+dNcUBknB94JyYOfgAH3OySIKevot8Cic9hjRPDtANMsNdrZ/T9TEBbXGV5ByaDEBPn2555pMXZQeXMeA6dwe6YD6V1VEx2R3d3d2ftYBuXkCCDnbTF+NlmDPxdJoMqvcq1LXiXm7N9wDNZvYpboF7hI2MCowiIn8fg3D0zD0k5WvzujIsTY/P6OzHZnZlV3eatTJDl1FitgTOTF5Q3Po7B8aiYPL1wav7UwKk5ZehjxPHCc2NNzL+r71pTSe/5Vj4vT83akTLKeXEU6syO4RIYR8NksHvtmRSCytPn1EkHfHbeNXeKhxVI2F134XeZkDWlZHPN0CntNHhWAVVv8DwmnkdlJ2vPKL6XfXoGT4XpopOtCGFHxmZa8jtMIBfOYSgfHJ2XzioqxX/vy94HR4/LI2bCWHTWyUWaTPZX/10mA3J+FjPIE05SRudn35jYxGG+dWQWPwwZ5OlrV8F7QRbrMpnz5WxIzt7J4tX8xJ5VDcZzGiRxmnyq5pdN4K4f5iXRjojJibV4PH5+VJ3nfHzeZrJ74rw9ZTn/NOee4XftJCwhywRj6J4dzmE6ehqUrXt25oQLmE12j16Q5AizlWPH7BEbhRAmnXjyiTOQo2fou8hkVs1PJHgr5Yr/RQnT1RWB0bkxxw/OjWLIiYeJOHQmZ5p5lxOg42NzUs4Pdrcrxe5cK54MvoXJgJs+w1xr7hOV/OaEnluD4mMn4sOOF6yqSTQkxDKKOtjOBAbsI5gQfvpEy6lAY+fi8TmmQzyxqbSyFbvr5PQMKkt8+I2XYjAtUDLBPCV3Vc22xnKsOqpSBBCVvVyvQMKQEEvtX5902zMthwla6Ecw0Vn16mwTozNrY/G5MGaQP862oXvUzbtI7t9Y4BJrAz31CVR0mMjqKE4RRwfk8Cy0dC4+16wP6gkNrIUpx4ZmHCZ6GKqhhD6YCczO+XwczV1hLD52nOOK2eLUXLwNa2PD9imYDM9jwZvapfEwHmL3Rad0DL48jYf5gGpo2M1eiNCG19bia8NUhJ89hROfci4knTqOR58SH2Eogg+3MEDtsQf9Ot5WPHy8OVgUqx+ff/OVK0HnsaZzPYVypz2qrqu2LicJXcMGhgUXdn2nYTqAJwx/1NoZuu5ed5CUuO/tQGYv20BbMsDa9IDzESKwonsRm/qwAVxlAj7b1hojmqpGcfUp2HBXhMf37/BEH7N2Br7hYgO3m3kJaYeus9YZmLp08UY7XL2Dhq8wEYELZeHybLgUG9/7WxrABBsU+JqhugLCmzuw/E/12pDUI5b1X/F2mV79Npl80tk3/jRcsa81esrjg7QhAUaFIhojQhesJXBciB+1wdYWXGbNVUZd4H0TvGEE+nUtZhjJdKcXiMK3L5vWIOw3STmuq6nUWAAPorv7Oce11SgJO0w4WLJPdzghX3zRT5fsWsxv5Au0s++XkYjZQhEXEebEMqMP0lVTcrNYhA5arQqCUfiXCVtzfIyZ1yJAHmpUVbwIR82iSTRg4u84k8jFRBsKFoy8ef+nVDZWW3xQT3yTqFPr5+buu2mrbtdSxwqrkUj8FCXmYiJx0URlMpOJ1N2qQCZ3O80EF1hqLsoRq6wQK3fXLjFqFb9hZJbwVXe7ipEt8YLhNxorjuWYuI5SgeAqDbUFXJrfzBtGqkD+KCat5UViyQVR/ckhYr+3n1w1k83VR2KNcAHL6rYxE1xXKZtJKyZlqpio5ZrMmlqTqbOhIZLZyefzMIY1/KzUzQqu4ZOvNJL2OizJBfOi35/N28jYTFYt8G7gCdSqKpkBxaSEjgFXyHCZ1FlnZaJZS4XCAlooLir2eClYU4uk3F9NP6igbJAJDPyjgg1ex+V7yvX6UrUoiBKXLZNUCRwwc2RS/AYXBOrA6mPtAO/P2EPlayJUUisDKrWz/dzSCMOFx1wmmTTDO/9UFpTWgXmkklHaxqRWQt/2laNdP4HJdZqJhrmwaXtNiG3WIupLIapDPhTBpcgcJo20evVfo8gEbSibNb5LF1tMsqkaIotMdBBNrLLa+VUghW42/b91F4Y3s2LfQ3kQa5OJ3S9aiOHCXbVazMgaPxW/NVwmjk8wlEysRSOWWXrLOpGdYrKjTFaVs9WDmRjJUqmUAYdglJN7mNhOD2QS+dmAIzqwcuJ+JlobE+xbQ5cc5pJWwzhYJslVyi1Us8XFJpPa14uAnZQaiEjZSJUP5Qf+3g+sjQmtw5gnHkgCCVW15j+ACa5Q9FyG2WoWssR8y3fdX3i+UF9Vy/9xGb7/fanjPPYy4VUMI3evQfqUvoNLlB0ok6WieQ0MKtbIt2RSwpva4LSASdiqJ5MP/oi1UkmLiZDYVX8tv5iPZXF9Mozx+5nUEvl8Stn2TivGl/DRGshWILLIpZgRWzRZx+2EIxMnCyfcasTcZCXlz8YqSxA0jL1MHD9Va5QuQgazh8kd3Ipm0PALnVhidB8T7swn8My6MMsptVhd7A7mh8kle2HBvUwwNCYa22nYtYeJHe1tYytrHY+MmhZtXNypFDAFxEsCVrpyJ5HIV8rbPy/uNBaiheTOIsR4O8asVBYVkt8/enKTFiq4K1KGGmXMhWnpa9jiZiZxJ1PqfIwHN2ytgt9xfosQ3BZdKjwpFVaj1vNCfYVE08/rBd0ZYUqfLzxHLCxRpol0/XkBsoGVhYUFXNGKR1fq9QXCc6uFUpp0fCaPixKpRfGbv9kpGC6UJDQu1EOZ+Cyme1kKPoVQF6wkUdeyYJcO7CVev8Jfo8XkjHNoT3zM1cQPpYJXoJrXGdDsOSFMgzSdOVfB2lY6dn5vDurgFtJHl6eDQNWTnGpKj4+mSv0PMBMPHjx48ODBgwcPHjx48ODBgwcPHjx48ODBgwcPHjx4+J9ClZrVasfvlx8+CH3xy+uXL188NKsmrZpVrVqUsPWn+dHndwcpvnr98jqwuf7y+q8vr798+Pp6+vX1X//obn0AePX1i1fXX7/4z6//efH6VfTVy9e/XF95de0vKBORc5jwV79cf/UC/nv98tXrlb8gE138uvLLr/BHfkn/+urFr8VfXlRfvFj5C/6KDyHqKWZKRZRWXxQpoVV8i+yP7tbH4i9PwIMHDx48ePDgwcMh4/8BfgsAf0ncBooAAAAASUVORK5CYII=" alt="" />
          <img src="https://tyup.net/uploads/bashkalar/tataal-sozdor/tataal-sozdor-bolunushu.png" alt="" />
          <h4>Мисалы:</h4>
          <ul>
            <li>
            зат атоочтор: кыларкан, таяке, оозеки, жетата, көккытан, аткулак, бакажалбырак, ташкөмүр, бала-бакыра, ыйкы-тыйкы, күч-кубат, Сатыбалды, Токтобүбү, Турусбек, Ысыккөл, Шамалдысай, Чоңсарой, Акталаа ж.б.
            </li>
            <li>
            айбалта, аткулак, балчелек, колжазма, ишбилги, аккөңүл, ачкүсөн, көккытан, эчкемер, көзайнек, демалыш, чыпетме, атбагар, орунбасар, Мукамбеткалый, Тилебалды, Жетөгүз, Салкынтөр, Базаркоргон ж.б.
            </li>
            <li>
            айбалта, аткулак, балчелек, колжазма, ишбилги, аккөңүл, ачкүсөн, көккытан, эчкемер, көзайнек, демалыш, чыпетме,
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Тест:</h2>
        <Quiz/>
      </section>
    </div>
  );
};

export default Lessons;
