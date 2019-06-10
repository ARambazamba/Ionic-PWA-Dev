import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CmdItem } from './CmdItem';

@Injectable()
export class EventBusService {
	//Registers the command for a certain route
	Commands: BehaviorSubject<CmdItem[]> = new BehaviorSubject([]);
	Panel: BehaviorSubject<string> = new BehaviorSubject('');

	constructor() {}

	setCmds(items: CmdItem[]) {
		this.Commands.next(items);
	}

	triggerCmd(action: string) {
		this.Panel.next(action);
	}
}
