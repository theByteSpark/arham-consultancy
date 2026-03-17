import { useRef, useState } from "react";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import HeroImage from "../images/about-hero.png";
import "./Calculator.css";

const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL || "http://localhost:5000";

const formatINR = (value) =>
  `\u20B9 ${new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
    Math.round(value)
  )}`;

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });

function buildCalculatorEmail(payload) {
  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safePhone = escapeHtml(payload.phone);
  const calculatorLabel = payload.calculatorType === "emi" ? "EMI Calculator" : "SIP Calculator";
  const summaryTitle = payload.calculatorType === "emi" ? "Loan Summary" : "Investment Summary";
  const resultTitle = payload.calculatorType === "emi" ? "EMI Results" : "SIP Results";

  const summaryRows =
    payload.calculatorType === "emi"
      ? [
          ["Loan Amount", formatINR(payload.inputs.loanAmount)],
          ["Interest Rate", `${payload.inputs.interestRate}% per annum`],
          ["Loan Tenure", `${payload.inputs.loanTenure} years`],
        ]
      : [
          ["Monthly Investment", formatINR(payload.inputs.monthlyInvestment)],
          ["Expected Return", `${payload.inputs.expectedReturnRate}% per annum`],
          ["Investment Period", `${payload.inputs.investmentPeriod} years`],
        ];

  const resultRows =
    payload.calculatorType === "emi"
      ? [
          ["Monthly EMI", formatINR(payload.results.monthlyEmi)],
          ["Total Interest", formatINR(payload.results.totalInterest)],
          ["Total Payment", formatINR(payload.results.totalPayment)],
        ]
      : [
          ["Total Invested", formatINR(payload.results.totalInvested)],
          ["Estimated Returns", formatINR(payload.results.estimatedReturns)],
          ["Maturity Value", formatINR(payload.results.maturityValue)],
        ];

  const renderRows = (rows) =>
    rows
      .map(
        ([label, value]) => `
          <tr>
            <td style="padding:0 0 12px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:#ffffff;border:1px solid #e5e7eb;border-radius:14px;">
                <tr>
                  <td style="padding:14px 16px;">
                    <div style="font-size:12px;line-height:1.5;color:#6b7280;text-transform:uppercase;letter-spacing:0.6px;">${escapeHtml(
                      label
                    )}</div>
                    <div style="margin-top:4px;font-size:17px;line-height:1.5;color:#111827;font-weight:700;">${escapeHtml(
                      value
                    )}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        `
      )
      .join("");

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0;padding:0;background:#eef2f7;font-family:Arial,sans-serif;color:#111827;">
      <tr>
        <td align="center" style="padding:18px 10px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;border-collapse:collapse;background:#ffffff;border:1px solid #dbe3ee;border-radius:20px;overflow:hidden;">
            <tr>
              <td style="padding:26px 22px;background:#0f172a;">
                <div style="font-size:12px;line-height:1.5;letter-spacing:1.2px;text-transform:uppercase;color:#93c5fd;">Arham Tax Consultancy</div>
                <div style="margin-top:10px;font-size:26px;line-height:1.25;font-weight:700;color:#ffffff;">${calculatorLabel} Report</div>
                <div style="margin-top:10px;font-size:14px;line-height:1.7;color:#cbd5e1;">
                  A quick summary of the calculation you requested.
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 18px 10px;">
                <div style="font-size:18px;line-height:1.6;font-weight:700;color:#111827;">Hello ${safeName},</div>
                <div style="margin-top:8px;font-size:14px;line-height:1.8;color:#475569;">
                  Thank you for connecting with Arham Tax Consultancy. Below is your ${calculatorLabel.toLowerCase()} summary.
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:10px 18px 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:#f8fafc;border:1px solid #e5e7eb;border-radius:16px;">
                  <tr>
                    <td style="padding:18px 16px;">
                      <div style="font-size:12px;line-height:1.5;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;color:#2563eb;">Your Details</div>
                      <div style="margin-top:12px;font-size:13px;line-height:1.7;color:#64748b;">Email</div>
                      <div style="font-size:15px;line-height:1.7;font-weight:700;color:#111827;word-break:break-word;">${safeEmail}</div>
                      <div style="margin-top:10px;font-size:13px;line-height:1.7;color:#64748b;">Phone</div>
                      <div style="font-size:15px;line-height:1.7;font-weight:700;color:#111827;">${safePhone}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 18px 0;">
                <div style="font-size:12px;line-height:1.5;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;color:#2563eb;">${summaryTitle}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 18px 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  ${renderRows(summaryRows)}
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 18px 0;">
                <div style="font-size:12px;line-height:1.5;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;color:#2563eb;">${resultTitle}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 18px 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  ${renderRows(resultRows)}
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 18px 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:#eff6ff;border:1px solid #bfdbfe;border-radius:16px;">
                  <tr>
                    <td style="padding:18px 16px;font-size:14px;line-height:1.8;color:#1e3a8a;">
                      If you want help understanding these numbers or planning the next step, our team can assist you directly.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:22px 18px 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-top:1px solid #e5e7eb;">
                  <tr>
                    <td style="padding-top:18px;">
                      <div style="font-size:14px;line-height:1.6;font-weight:700;color:#111827;">Contact us</div>
                      <div style="margin-top:8px;font-size:14px;line-height:1.9;color:#475569;">
                        <a href="mailto:ronak.arhamtaxconsultancy@gmail.com" style="color:#2563eb;text-decoration:none;word-break:break-word;">ronak.arhamtaxconsultancy@gmail.com</a><br/>
                        <a href="tel:+919427217754" style="color:#2563eb;text-decoration:none;">+91 9427217754</a> |
                        <a href="tel:+918849381276" style="color:#2563eb;text-decoration:none;">+91 8849381276</a>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}

function getEmiResult(loanAmount, annualRate, years) {
  const months = years * 12;
  const monthlyRate = annualRate / 12 / 100;

  if (loanAmount <= 0 || months <= 0) return null;

  const monthlyEmi =
    monthlyRate === 0
      ? loanAmount / months
      : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = monthlyEmi * months;
  const totalInterest = totalPayment - loanAmount;

  return { monthlyEmi, totalInterest, totalPayment };
}

function getSipResult(monthlyInvestment, annualRate, years) {
  const months = years * 12;
  const monthlyRate = annualRate / 12 / 100;

  if (monthlyInvestment <= 0 || months <= 0) return null;

  const maturityValue =
    monthlyRate === 0
      ? monthlyInvestment * months
      : monthlyInvestment *
        (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));

  const totalInvested = monthlyInvestment * months;
  const estimatedReturns = maturityValue - totalInvested;

  return { totalInvested, estimatedReturns, maturityValue };
}

function Calculator() {
  const calculatorRef = useRef(null);
  const [tab, setTab] = useState("emi");
  const [emi, setEmi] = useState({
    loanAmount: 500000,
    interestRate: 8.5,
    loanTenure: 5,
  });
  const [sip, setSip] = useState({
    monthlyInvestment: 5000,
    expectedReturnRate: 12,
    investmentPeriod: 10,
  });

  const [emiResult, setEmiResult] = useState(null);
  const [sipResult, setSipResult] = useState(null);
  const [mailModalOpen, setMailModalOpen] = useState(false);
  const [mailType, setMailType] = useState("");
  const [mailForm, setMailForm] = useState({
    name: "",
    email: "",
    phone: "",
    error: "",
  });
  const [isSending, setIsSending] = useState(false);

  const updateEmi = (field, value) => {
    setEmi((prev) => ({ ...prev, [field]: Number(value) || 0 }));
  };

  const updateSip = (field, value) => {
    setSip((prev) => ({ ...prev, [field]: Number(value) || 0 }));
  };

  const calculateEmi = () => setEmiResult(getEmiResult(emi.loanAmount, emi.interestRate, emi.loanTenure));
  const calculateSip = () =>
    setSipResult(getSipResult(sip.monthlyInvestment, sip.expectedReturnRate, sip.investmentPeriod));

  const openMailModal = (type) => {
    setMailType(type);
    setMailForm({ name: "", email: "", phone: "", error: "" });
    setMailModalOpen(true);
  };

  const closeMailModal = () => {
    setMailModalOpen(false);
    setMailForm({ name: "", email: "", phone: "", error: "" });
  };

  const sendResultsToMail = async () => {
    const name = mailForm.name.trim();
    const email = mailForm.email.trim();
    const phone = mailForm.phone.trim();
    const emailPattern = /^\S+@\S+\.\S+$/;
    const phonePattern = /^[0-9]{10,15}$/;

    if (!name) {
      setMailForm((prev) => ({ ...prev, error: "Please enter your name." }));
      return;
    }
    if (!emailPattern.test(email)) {
      setMailForm((prev) => ({ ...prev, error: "Please enter a valid email." }));
      return;
    }
    if (!phonePattern.test(phone)) {
      setMailForm((prev) => ({ ...prev, error: "Please enter a valid phone number." }));
      return;
    }

    let payload = null;

    if (mailType === "emi" && emiResult) {
      payload = {
        name,
        email,
        phone,
        calculatorType: "emi",
        inputs: {
          loanAmount: emi.loanAmount,
          interestRate: emi.interestRate,
          loanTenure: emi.loanTenure
        },
        results: {
          monthlyEmi: emiResult.monthlyEmi,
          totalInterest: emiResult.totalInterest,
          totalPayment: emiResult.totalPayment
        }
      };
    }

    if (mailType === "sip" && sipResult) {
      payload = {
        name,
        email,
        phone,
        calculatorType: "sip",
        inputs: {
          monthlyInvestment: sip.monthlyInvestment,
          expectedReturnRate: sip.expectedReturnRate,
          investmentPeriod: sip.investmentPeriod
        },
        results: {
          totalInvested: sipResult.totalInvested,
          estimatedReturns: sipResult.estimatedReturns,
          maturityValue: sipResult.maturityValue
        }
      };
    }

    if (!payload) {
      setMailForm((prev) => ({ ...prev, error: "Please calculate first before sending email." }));
      return;
    }

    setIsSending(true);

    try {
      const html = buildCalculatorEmail(payload);
      const subject =
        payload.calculatorType === "emi"
          ? "Your EMI Calculator Report | Arham Tax Consultancy"
          : "Your SIP Calculator Report | Arham Tax Consultancy";

      const response = await fetch(`${BACKEND_BASE_URL}/api/email/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          project: "arham",
          from: "arham <digesh@thebytespark.com>",
          to: email,
          subject,
          html,
        }),
      });

      const responseData = await response.json().catch(() => null);

      if (!response.ok || !responseData?.success) {
        throw new Error(responseData?.message || "Email sending failed");
      }

      try {
        const sheetResponse = await fetch(`${BACKEND_BASE_URL}/api/sheet/save-sheet`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            project: "arham",
            data: {
              name: payload.name,
              email: payload.email,
              phone: payload.phone,
              calculatorType: payload.calculatorType,
              loanAmount: payload.inputs?.loanAmount,
              interestRate: payload.inputs?.interestRate,
              loanTenure: payload.inputs?.loanTenure,
              monthlyInvestment: payload.inputs?.monthlyInvestment,
              expectedReturnRate: payload.inputs?.expectedReturnRate,
              investmentPeriod: payload.inputs?.investmentPeriod,
              monthlyEmi: payload.results?.monthlyEmi,
              totalInterest: payload.results?.totalInterest,
              totalPayment: payload.results?.totalPayment,
              totalInvested: payload.results?.totalInvested,
              estimatedReturns: payload.results?.estimatedReturns,
              maturityValue: payload.results?.maturityValue,
            },
          }),
        });

        const sheetData = await sheetResponse.json().catch(() => null);
        console.log("Sheet response:", sheetData);

        if (!sheetResponse.ok) {
          console.error("Sheet error:", sheetData || "Failed to save sheet data.");
        }
      } catch (err) {
        console.error("Sheet error:", err);
      }

      closeMailModal();
    } catch (error) {
      setMailForm((prev) => ({
        ...prev,
        error: "Unable to send report email right now. Please try again.",
      }));
    } finally {
      setIsSending(false);
    }
   
  };

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="calculator-page">
      <PageHero
        title="Financial Calculators"
        subtitle="Plan your loans and investments easily with instant EMI and SIP calculations."
        backgroundImage={HeroImage}
        buttonText="Calculate Now"
        onButtonClick={scrollToCalculator}
      />

      <main id="calculator-block" className="calculator-main" ref={calculatorRef}>
        <section className="calculator-container">
          <header className="calculator-section-header">
            <h2>Calculators</h2>
            <p>Use the buttons below to switch between EMI and SIP calculators.</p>
          </header>

          <div className="calculator-tab-actions">
            <button
              className={`cta-tab-btn ${tab === "emi" ? "active" : ""}`}
              onClick={() => setTab("emi")}
              type="button"
            >
              EMI Calculator
            </button>
            <button
              className={`cta-tab-btn ${tab === "sip" ? "active" : ""}`}
              onClick={() => setTab("sip")}
              type="button"
            >
              SIP Calculator
            </button>
          </div>

          <section className="calculator-card">
            {tab === "emi" ? (
              <>
                <h3>EMI Calculator</h3>

                <div className="input-group">
                  <div className="input-head">
                    <label htmlFor="loanAmount">Loan Amount</label>
                    <span className="input-chip">{formatINR(emi.loanAmount)}</span>
                  </div>
                  <div className="number-input-wrap">
                    <span className="input-adornment prefix">{"\u20B9"}</span>
                    <input
                      id="loanAmount"
                      type="number"
                      min={50000}
                      max={50000000}
                      step={10000}
                      className="with-prefix"
                      value={emi.loanAmount}
                      onChange={(e) => updateEmi("loanAmount", e.target.value)}
                    />
                  </div>
                  <input
                    className="range-slider"
                    type="range"
                    min={50000}
                    max={50000000}
                    step={10000}
                    value={emi.loanAmount}
                    onChange={(e) => updateEmi("loanAmount", e.target.value)}
                  />
                  <div className="range-meta">
                    <span>{"\u20B9 50,000"}</span>
                    <span>{"\u20B9 5,00,00,000"}</span>
                  </div>
                </div>

                <div className="input-group">
                  <div className="input-head">
                    <label htmlFor="interestRate">Interest Rate</label>
                    <span className="input-chip">{emi.interestRate}%</span>
                  </div>
                  <div className="number-input-wrap">
                    <input
                      id="interestRate"
                      type="number"
                      min={1}
                      max={25}
                      step={0.1}
                      className="with-suffix"
                      value={emi.interestRate}
                      onChange={(e) => updateEmi("interestRate", e.target.value)}
                    />
                    <span className="input-adornment suffix">%</span>
                  </div>
                  <input
                    className="range-slider"
                    type="range"
                    min={1}
                    max={25}
                    step={0.1}
                    value={emi.interestRate}
                    onChange={(e) => updateEmi("interestRate", e.target.value)}
                  />
                  <div className="range-meta">
                    <span>1%</span>
                    <span>25%</span>
                  </div>
                </div>

                <div className="input-group">
                  <div className="input-head">
                    <label htmlFor="loanTenure">Loan Tenure</label>
                    <span className="input-chip">{emi.loanTenure} Years</span>
                  </div>
                  <div className="number-input-wrap">
                    <input
                      id="loanTenure"
                      type="number"
                      min={1}
                      max={30}
                      step={1}
                      className="with-suffix"
                      value={emi.loanTenure}
                      onChange={(e) => updateEmi("loanTenure", e.target.value)}
                    />
                    <span className="input-adornment suffix">Years</span>
                  </div>
                  <input
                    className="range-slider"
                    type="range"
                    min={1}
                    max={30}
                    step={1}
                    value={emi.loanTenure}
                    onChange={(e) => updateEmi("loanTenure", e.target.value)}
                  />
                  <div className="range-meta">
                    <span>1 Year</span>
                    <span>30 Years</span>
                  </div>
                </div>

                <button className="calculate-btn" type="button" onClick={calculateEmi}>
                  Calculate EMI
                </button>

                {emiResult ? (
                  <div className="result-box">
                    <h4>Calculation Results</h4>
                    <div className="result-row">
                      <span>Monthly EMI</span>
                      <strong>{formatINR(emiResult.monthlyEmi)}</strong>
                    </div>
                    <div className="result-row">
                      <span>Total Interest</span>
                      <strong>{formatINR(emiResult.totalInterest)}</strong>
                    </div>
                    <div className="result-row total">
                      <span>Total Payment</span>
                      <strong>{formatINR(emiResult.totalPayment)}</strong>
                    </div>
                    <button type="button" className="mail-btn" onClick={() => openMailModal("emi")}>
                      Send to Mail
                    </button>
                  </div>
                ) : (
                  <div className="result-empty">
                    Click Calculate EMI to view monthly payment, interest, and total repayment.
                  </div>
                )}
              </>
            ) : (
              <>
                <h3>SIP Calculator</h3>

                <div className="input-group">
                  <div className="input-head">
                    <label htmlFor="monthlyInvestment">Monthly Investment</label>
                    <span className="input-chip">{formatINR(sip.monthlyInvestment)}</span>
                  </div>
                  <div className="number-input-wrap">
                    <span className="input-adornment prefix">{"\u20B9"}</span>
                    <input
                      id="monthlyInvestment"
                      type="number"
                      min={500}
                      max={500000}
                      step={500}
                      className="with-prefix"
                      value={sip.monthlyInvestment}
                      onChange={(e) => updateSip("monthlyInvestment", e.target.value)}
                    />
                  </div>
                  <input
                    className="range-slider"
                    type="range"
                    min={500}
                    max={500000}
                    step={500}
                    value={sip.monthlyInvestment}
                    onChange={(e) => updateSip("monthlyInvestment", e.target.value)}
                  />
                  <div className="range-meta">
                    <span>{"\u20B9 500"}</span>
                    <span>{"\u20B9 5,00,000"}</span>
                  </div>
                </div>

                <div className="input-group">
                  <div className="input-head">
                    <label htmlFor="expectedReturnRate">Expected Return Rate</label>
                    <span className="input-chip">{sip.expectedReturnRate}%</span>
                  </div>
                  <div className="number-input-wrap">
                    <input
                      id="expectedReturnRate"
                      type="number"
                      min={1}
                      max={30}
                      step={0.1}
                      className="with-suffix"
                      value={sip.expectedReturnRate}
                      onChange={(e) => updateSip("expectedReturnRate", e.target.value)}
                    />
                    <span className="input-adornment suffix">%</span>
                  </div>
                  <input
                    className="range-slider"
                    type="range"
                    min={1}
                    max={30}
                    step={0.1}
                    value={sip.expectedReturnRate}
                    onChange={(e) => updateSip("expectedReturnRate", e.target.value)}
                  />
                  <div className="range-meta">
                    <span>1%</span>
                    <span>30%</span>
                  </div>
                </div>

                <div className="input-group">
                  <div className="input-head">
                    <label htmlFor="investmentPeriod">Investment Period</label>
                    <span className="input-chip">{sip.investmentPeriod} Years</span>
                  </div>
                  <div className="number-input-wrap">
                    <input
                      id="investmentPeriod"
                      type="number"
                      min={1}
                      max={40}
                      step={1}
                      className="with-suffix"
                      value={sip.investmentPeriod}
                      onChange={(e) => updateSip("investmentPeriod", e.target.value)}
                    />
                    <span className="input-adornment suffix">Years</span>
                  </div>
                  <input
                    className="range-slider"
                    type="range"
                    min={1}
                    max={40}
                    step={1}
                    value={sip.investmentPeriod}
                    onChange={(e) => updateSip("investmentPeriod", e.target.value)}
                  />
                  <div className="range-meta">
                    <span>1 Year</span>
                    <span>40 Years</span>
                  </div>
                </div>

                <button className="calculate-btn" type="button" onClick={calculateSip}>
                  Calculate SIP
                </button>

                {sipResult ? (
                  <div className="result-box">
                    <h4>Calculation Results</h4>
                    <div className="result-row">
                      <span>Invested Amount</span>
                      <strong>{formatINR(sipResult.totalInvested)}</strong>
                    </div>
                    <div className="result-row">
                      <span>Estimated Returns</span>
                      <strong>{formatINR(sipResult.estimatedReturns)}</strong>
                    </div>
                    <div className="result-row total">
                      <span>Total Value</span>
                      <strong>{formatINR(sipResult.maturityValue)}</strong>
                    </div>
                    <button type="button" className="mail-btn" onClick={() => openMailModal("sip")}>
                      Send to Mail
                    </button>
                  </div>
                ) : (
                  <div className="result-empty">
                    Click Calculate SIP to view invested amount, returns, and maturity value.
                  </div>
                )}
              </>
            )}
          </section>
        </section>
      </main>

      {mailModalOpen && (
        <div className="mail-modal-backdrop" onClick={closeMailModal}>
          <div className="mail-modal" onClick={(e) => e.stopPropagation()}>
            <h4>Send Results to Mail</h4>
            <p>Please enter your name and email.</p>
            <div className="mail-field">
              <label htmlFor="mailName">Name</label>
              <input
                id="mailName"
                type="text"
                value={mailForm.name}
                onChange={(e) => setMailForm((prev) => ({ ...prev, name: e.target.value, error: "" }))}
                placeholder="Enter your name"
              />
            </div>
            <div className="mail-field">
              <label htmlFor="mailEmail">Email</label>
              <input
                id="mailEmail"
                type="email"
                value={mailForm.email}
                onChange={(e) => setMailForm((prev) => ({ ...prev, email: e.target.value, error: "" }))}
                placeholder="Enter your email"
              />
            </div>
            <div className="mail-field">
              <label htmlFor="mailPhone">Phone Number</label>
              <input
                id="mailPhone"
                type="tel"
                value={mailForm.phone}
                onChange={(e) =>
                  setMailForm((prev) => ({ ...prev, phone: e.target.value.replace(/\D/g, ""), error: "" }))
                }
                placeholder="Enter your phone number"
              />
            </div>
            {mailForm.error && <div className="mail-error">{mailForm.error}</div>}
            <div className="mail-actions">
              <button type="button" className="mail-cancel" onClick={closeMailModal}>
                Cancel
              </button>
              <button type="button" className="mail-send" onClick={sendResultsToMail} disabled={isSending}>
                {isSending ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Calculator;
