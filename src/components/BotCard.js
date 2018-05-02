import React from "react";

const BotCard = props => {
  const { bot } = props;

  console.log(bot)

  let botType;

  switch (props.data.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={props.data.id}
        onClick={() => {props.handleClick(props.data.id)}}
      >
        <div className="image">
          <img alt="oh no!" src={props.data.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {props.data.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{props.data.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.data.health}
          </span>

          <span>
            <i className="icon lightning" />
            {props.data.damage}
          </span>
          <span>
            <i className="icon shield" />
            {props.data.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
