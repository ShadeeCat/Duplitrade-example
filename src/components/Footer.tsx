import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
	return <footer>
		<nav className="footer_nav">
			<ul>
				<h3>About</h3>
				<li><NavLink to="/about-us">About Us</NavLink></li>
				<li><NavLink to="/why-dupliTrade">Why DupliTrade</NavLink></li>
				<li><NavLink to="/contact-us">Contact Us</NavLink></li>
				<li><NavLink to="/legal-documents">Legal Documents</NavLink></li>
			</ul>
			<ul>
				<h3>Getting Started</h3>
				<li><NavLink to="/how-does-it-work">How Does It Work</NavLink></li>
				<li><NavLink to="/faq">FAQ</NavLink></li>
				<li><NavLink to="/strategy-charts">Strategy Providers Guide</NavLink></li>
				<li><NavLink to="/glossary">Glossary</NavLink></li>
			</ul>
			<ul>
				<h3>Blog</h3>
				<li><NavLink to="/tips">Tips</NavLink></li>
				<li><NavLink to="/advantages">Advantages</NavLink></li>
				<li><NavLink to="/what-is">What Is</NavLink></li>
				<li><NavLink to="/how-to">How To</NavLink></li>
			</ul>
			<ul>
				<h3>Partnerships</h3>
				<li><NavLink to="/affiliates">Affiliates</NavLink></li>
				<li><NavLink to="/strategy-charts">Strategy Providers</NavLink></li>
				<li><NavLink to="/institutional-clients">Institutional Clients</NavLink></li>
			</ul>
		</nav>
		<div>
			<p>Copyright © 2019 DT Direct Investment Hub Ltd. All Rights Reserved</p>
			<div className="privacy_policy">
				<a href="#">Risk Disclosure</a>
				<span>|</span>
				<a href="#">Privacy Policy</a>
			</div>
			<p>Address: 74 Archiepiskopou Makariou C’, Amaranton Court, 2nd Floor, Mesa Geitonia, Limassol;</p>
			<div>
				<span>Telephone: </span>
				<a href="tel:00 357 25 654 092">00 357 25 654 092</a>
			</div>
			<div>
				<span>Email: </span>
				<a href = "mailto: info@dtdirectinvestmenthub.com">info@dtdirectinvestmenthub.com</a>
			</div>
			<p className="licence">DupliTrade is operated by DT Direct Investment Hub Ltd. DT Direct Investment Hub Ltd is a Cyprus Investment Firm (CIF) regulated and supervised by the Cyprus Securities and Exchange Commission with CIF Licence number 347/17 and Company registration number HE354263</p>
			<div className="disclaimer">
				<p>Disclaimer: Trading foreign exchange (“forex”), commodity futures, options, contract for difference ("cfd") and spread betting on margin (the "investment products") carry a high level of risk, and may not be suitable for all investors. Before deciding to trade using the investment products you should carefully consider your monetary objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your deposited funds and therefore you should not speculate with capital that you cannot afford to lose. You should be aware of all the risks associated with the investment products, and seek advice from an independent advisor if you have any doubts.</p>
				<p>Past performance results are not necessarily indicative of future results. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown. The performance results of the demonstration ("demo") account displayed on this website imitating real time transactions made by investors using the investment products in real accounts, do not guarantee that same results would have been achieved if you were to imitate the foregoing transactions in real time using a real account. In fact, there are frequently sharp differences between performance results using the demo account and performance results achieved by using any particular investment product and third party trading signals in real account, due to factors related to the involvement of your broker in the transaction and technical limitations and capabilities, which are not under the control of DupliTrade. Finally, there are numerous other factors related to the markets in general or to the implementation of any specific investment product and third party trading signal which cannot be fully accounted for by past performance results. Prospective clients should be particularly wary of placing undue reliance on past performance results and should not base their decision to use any investment product and/or any third party trading signal solely on the past performance presented. The investment products described herein have been developed for sophisticated traders who fully understand the nature and the scope of the risks that are associated with trading. Therefore, in making an investment decision, prospective clients must also rely on their own examination of the person or entity making the trading decisions and the terms of the advisory agreement including the merits and risks involved.</p>
				<p>You understand that there is no strategy provider or recommendation service that is free from the risk of loss. You also understand that the transfer of third party trading signals by the application to your brokers trading account, shall not in any event constitute the provision of investment services or advice by DupliTrade. In making a decision to follow a specific third party trading signal, account, portfolio and/or strategy, you have considered your entire financial situation including financial commitments and you understand that you could sustain significant losses in your account. DupliTrade does not imply or guarantee that you will make a profit and you agree that neither DupliTrade nor any of its officers, directors, employees, consultants, agents or affiliates will be held responsible for the performance of the trading signals generated by third parties and transferred by the application to your brokers trading account or trading losses in your account. If you do not agree with the terms of the disclaimer, please exit the website and do not use any of its investment products. (the terms of your and application shall have the meaning ascribed to them in the end user license agreement)</p>
				<p>Please refer to our <a href="#">risk disclosure</a> for more detailed information.</p>
			</div>
		</div>
	</footer>
}