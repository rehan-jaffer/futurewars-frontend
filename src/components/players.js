const Players = (props) => {
    props.players.map((player)) => (
        <div class="player-item">
          <div class="player-name">{player.name}</div>
          <div class="player-rank">{player.rank}</div>
        </div>
    )
}