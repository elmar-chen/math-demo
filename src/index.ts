import * as z from "zrender";
import Stage from "./stage";
var stage = new Stage;

stage.station("A", 0);
stage.station("B", 150);

stage.player("甲", "A");
stage.player("乙", "B");

stage.newRound();
stage.move("甲").by(80);
stage.move("乙").by(-70);

stage.newRound();
stage.move("甲").toEnd().by(90);
stage.move("乙").toStart().by(60);



