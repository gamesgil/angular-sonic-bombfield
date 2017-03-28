/**
 * Created by student14 on 26/03/2017.
 */
import {Component, Input, VERSION, ViewChild} from '@angular/core'
import {GameGridComponent} from "./game-grid.component"

@Component({
    selector: "my-app",
    styles: [`
        .my-app{
                background-color: aliceblue;
                width: 640px;
                height: 600px;
            }
        h1 { color: red; }
        `],
    template: `
        <div class="my-app">
            <game-gui           #gui></game-gui>
            
            <game-grid          #grid       (onPrize)="gui.addToScore($event);onCollect($event)"
                                            (onCollectedAll)="gui.setStatus($event);onWin($event)"
                                            (onExplode)="onExplode($event)"></game-grid>

            <game-controller    #controller (onMove)="grid.move($event)" (onNewGame)="grid.reset($event);onStartGame($event)"></game-controller>
        </div>
        <audio #audioMusic src="assets/title.ogg"></audio>
        <audio #audioCollect src="assets/collect.mp3"></audio>
        <audio #audioExplosion src="assets/explosion.mp3"></audio>
        <audio #audioWin src="assets/win.mp3"></audio>
    `
})

export class AppComponent {
    @ViewChild("audioMusic") audTitle
    @ViewChild("audioCollect") audCollect
    @ViewChild("audioExplosion") audExplosion
    @ViewChild("audioWin") audWin

    constructor() {

    }

    ngOnInit() {
        this.onStartGame();
    }

    onStartGame() {
        this.audTitle.nativeElement.currentTime = 0;
        this.audTitle.nativeElement.play();
    }

    onCollect() {
        this.audCollect.nativeElement.play();
    }

    onWin() {
        this.audTitle.nativeElement.pause();
        this.audWin.nativeElement.play();
    }

    onExplode() {
        this.audTitle.nativeElement.pause();
        this.audExplosion.nativeElement.play();
    }
};

