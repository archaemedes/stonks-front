import React from "react";
import "components/TickerListItem.css"
export default function TickerListItem(props) {
  let pctClass = "red-percentage";
  let pctDisplay = `${props.pctChange}`;
  let displayNameDeconstructed = [...props.name];
  let displayName = '';
  if (parseFloat(props.pctChange) >= 0.00) {
    pctClass = "green-percentage"
    pctDisplay = `+${props.pctChange}`
  }

  if (displayNameDeconstructed.length > 17) {
    displayNameDeconstructed.splice(18, displayNameDeconstructed.length - 17)
    displayName = displayNameDeconstructed.join('')
    displayName = `${displayName}...`
  }

  return (
    <div className="ticker-list-item">
      <header className="ticker-head">
        <span>{displayName}</span><span>{props.lastSale}</span>
      </header>
      <footer className="ticker-footer">
        <span>{props.symbol}</span><span className={pctClass}>{pctDisplay}</span>
      </footer>
    </div>
  );
}